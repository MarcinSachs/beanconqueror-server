/**
 * SyncService – minimal server sync for Beanconqueror.
 *
 * Drop this file into:  src/services/sync/sync.service.ts
 *
 * Then inject & call initialize() once in AppComponent.ngOnInit():
 *
 *   // app.component.ts
 *   private syncService = inject(SyncService);
 *
 *   async ngOnInit() {
 *     // ... existing init code ...
 *     await this.syncService.initialize();
 *   }
 *
 * The service reads its configuration from Beanconqueror Settings.
 * Add these fields to the Settings class and the settings UI:
 *
 *   sync_server_url:   string  (e.g. "http://192.168.1.10:8000")
 *   sync_server_token: string  (Bearer token)
 *   sync_enabled:      boolean
 *   sync_last_ts:      number  (unix timestamp, managed automatically)
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppEventType } from '../../enums/appEvent/appEvent';
import { EventQueueService } from '../queueService/queue-service.service';
import { UILog } from '../uiLog';
import { UISettingsStorage } from '../uiSettingsStorage';
import { UIStorage } from '../uiStorage';

/** Collections to include in each sync push. */
const SYNC_COLLECTIONS = [
  'BEANS',
  'BREWS',
  'MILL',
  'PREPARATION',
  'WATER',
  'GREEN_BEANS',
  'GRAPHS',
  'ROASTING_MACHINE',
] as const;

/** Debounce delay after STORAGE_CHANGED before pushing (ms). */
const DEBOUNCE_MS = 5_000;

interface SyncResponse {
  merged: Record<string, unknown[]>;
  server_timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class SyncService {
  private readonly http = inject(HttpClient);
  private readonly uiStorage = inject(UIStorage);
  private readonly uiSettingsStorage = inject(UISettingsStorage);
  private readonly uiLog = inject(UILog);
  private readonly eventQueue = inject(EventQueueService);

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private isSyncing = false;

  /** Call once from AppComponent after all storages are ready. */
  public async initialize(): Promise<void> {
    if (!this.isEnabled()) {
      this.uiLog.log('SyncService - disabled, skipping');
      return;
    }

    // Pull from server first (catch-up on startup)
    await this.pull();

    // Listen for local changes and push debounced
    this.eventQueue.on(AppEventType.STORAGE_CHANGED).subscribe(() => {
      this.schedulePush();
    });
  }

  // ---------------------------------------------------------------------------
  // Public sync actions
  // ---------------------------------------------------------------------------

  /** Push local data to the server and merge the response. */
  public async push(): Promise<void> {
    if (!this.isEnabled() || this.isSyncing) return;
    this.isSyncing = true;
    try {
      const settings = this.uiSettingsStorage.getSettings() as any;
      const fullExport = await this.uiStorage.export();

      const collections: Record<string, unknown[]> = {};
      for (const key of SYNC_COLLECTIONS) {
        if (Array.isArray(fullExport[key])) {
          collections[key] = fullExport[key];
        }
      }

      const body = {
        collections,
        client_timestamp: settings.sync_last_ts ?? 0,
      };

      const response = await this.callServer<SyncResponse>(
        'POST',
        '/api/sync/push',
        body,
      );

      if (response) {
        await this.mergeResponse(response);
        await this.updateLastTs(response.server_timestamp);
        this.uiLog.log('SyncService - push successful', response.server_timestamp);
      }
    } catch (ex) {
      this.uiLog.error('SyncService - push failed', ex);
    } finally {
      this.isSyncing = false;
    }
  }

  /** Pull full snapshot from the server and merge into local storage. */
  public async pull(): Promise<void> {
    if (!this.isEnabled() || this.isSyncing) return;
    this.isSyncing = true;
    try {
      const response = await this.callServer<SyncResponse>('GET', '/api/sync/pull');
      if (response) {
        await this.mergeResponse(response);
        await this.updateLastTs(response.server_timestamp);
        this.uiLog.log('SyncService - pull successful', response.server_timestamp);
      }
    } catch (ex) {
      this.uiLog.error('SyncService - pull failed', ex);
    } finally {
      this.isSyncing = false;
    }
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  private schedulePush(): void {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => this.push(), DEBOUNCE_MS);
  }

  /**
   * Merge server response into local IndexedDB using Last-Write-Wins.
   * For each entry: keep the one with the higher unix_timestamp.
   */
  private async mergeResponse(response: SyncResponse): Promise<void> {
    const local = await this.uiStorage.export();

    for (const [key, serverEntries] of Object.entries(response.merged)) {
      const localEntries: unknown[] = Array.isArray(local[key]) ? local[key] : [];
      const merged = this.mergeCollection(
        localEntries as Record<string, any>[],
        serverEntries as Record<string, any>[],
      );
      await this.uiStorage.getStorage()?.set(key, merged);
    }
  }

  private mergeCollection(
    local: Record<string, any>[],
    server: Record<string, any>[],
  ): Record<string, any>[] {
    const index = new Map<string, Record<string, any>>();

    for (const entry of local) {
      const uuid = entry?.config?.uuid;
      if (uuid) index.set(uuid, entry);
    }

    for (const entry of server) {
      const uuid = entry?.config?.uuid;
      if (!uuid) continue;
      const existing = index.get(uuid);
      if (!existing || (entry?.config?.unix_timestamp ?? 0) >= (existing?.config?.unix_timestamp ?? 0)) {
        index.set(uuid, entry);
      }
    }

    return Array.from(index.values());
  }

  private async updateLastTs(ts: number): Promise<void> {
    const settings = this.uiSettingsStorage.getSettings() as any;
    settings.sync_last_ts = ts;
    await this.uiSettingsStorage.save();
  }

  private isEnabled(): boolean {
    try {
      const s = this.uiSettingsStorage.getSettings() as any;
      return !!(s?.sync_enabled && s?.sync_server_url && s?.sync_server_token);
    } catch {
      return false;
    }
  }

  private async callServer<T>(
    method: 'GET' | 'POST',
    path: string,
    body?: unknown,
  ): Promise<T | null> {
    const settings = this.uiSettingsStorage.getSettings() as any;
    const baseUrl = (settings.sync_server_url as string).replace(/\/$/, '');
    const token = settings.sync_server_token as string;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    const req =
      method === 'GET'
        ? this.http.get<T>(`${baseUrl}${path}`, { headers })
        : this.http.post<T>(`${baseUrl}${path}`, body, { headers });

    const result = await firstValueFrom(
      req.pipe(
        timeout(15_000),
        catchError((err) => {
          this.uiLog.error(`SyncService - HTTP ${method} ${path} failed`, err);
          return of(null);
        }),
      ),
    );

    return result as T | null;
  }
}
