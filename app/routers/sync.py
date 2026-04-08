"""
Sync router – implements Last-Write-Wins merge over Beanconqueror UIStorage
snapshots.

Protocol (client perspective)
──────────────────────────────
1. First sync (cold start):
   GET /api/sync/pull  → receive full server snapshot
   App calls UIStorage.import() with the received `merged` dict.

2. Normal sync (periodic or on STORAGE_CHANGED):
   POST /api/sync/push  { collections: {...}, client_timestamp: <last_sync_ts> }
   → server merges & responds with { merged: {...}, server_timestamp: <now> }
   App merges the response back into local storage.

3. Full pull (e.g. new device):
   GET /api/sync/pull  → same response shape as POST push
"""

import time
from typing import Any

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.config import SYNC_TOKENS
from app.models import SYNC_COLLECTIONS, SyncPullResponse, SyncPushRequest
from app.store import SyncStore

router = APIRouter(prefix="/api/sync", tags=["sync"])

# ---------------------------------------------------------------------------
# Auth – simple Bearer token  (Bearer <token>)
# ---------------------------------------------------------------------------
_bearer = HTTPBearer(auto_error=False)


def _require_token(
    creds: HTTPAuthorizationCredentials | None = Depends(_bearer),
) -> str:
    """
    Returns the user-id associated with the token.
    Raises 401 when the token is missing or unknown.
    """
    if creds is None or creds.credentials not in SYNC_TOKENS:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or missing Bearer token",
        )
    return SYNC_TOKENS[creds.credentials]


# ---------------------------------------------------------------------------
# Merge logic
# ---------------------------------------------------------------------------


def _merge_collection(
    server_entries: list[dict[str, Any]],
    client_entries: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """
    Last-Write-Wins merge for a single collection.

    Each entry is identified by config.uuid.
    The entry with the higher config.unix_timestamp wins.
    Entries present only on one side are always included.
    """
    index: dict[str, dict[str, Any]] = {}

    for entry in server_entries:
        uuid = _uuid(entry)
        if uuid:
            index[uuid] = entry

    for entry in client_entries:
        uuid = _uuid(entry)
        if not uuid:
            continue
        existing = index.get(uuid)
        if existing is None:
            index[uuid] = entry
        else:
            # keep the newer one
            if _ts(entry) >= _ts(existing):
                index[uuid] = entry

    return list(index.values())


def _uuid(entry: dict[str, Any]) -> str | None:
    try:
        return entry["config"]["uuid"]
    except (KeyError, TypeError):
        return None


def _ts(entry: dict[str, Any]) -> int:
    try:
        return int(entry["config"]["unix_timestamp"])
    except (KeyError, TypeError, ValueError):
        return 0


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.post("/push", response_model=SyncPullResponse)
async def push(
    body: SyncPushRequest,
    user_id: str = Depends(_require_token),
) -> SyncPullResponse:
    """
    Accept a partial or full snapshot from the client.
    Merge with the server copy and return the merged result.

    The client should then merge the returned data back into local storage
    (union by uuid, higher unix_timestamp wins — same algorithm).
    """
    store = SyncStore.get(user_id)
    now = int(time.time())
    merged: dict[str, list[dict[str, Any]]] = {}

    for collection in body.collections:
        server_col = store.get(collection, [])
        client_col = body.collections[collection]
        merged_col = _merge_collection(server_col, client_col)
        merged[collection] = merged_col
        store[collection] = merged_col  # persist merged back

    SyncStore.save(user_id, store)

    return SyncPullResponse(merged=merged, server_timestamp=now)


@router.get("/pull", response_model=SyncPullResponse)
async def pull(
    user_id: str = Depends(_require_token),
) -> SyncPullResponse:
    """
    Return the full server-side snapshot for this user.
    Used on first sync or when a new device joins.
    """
    store = SyncStore.get(user_id)
    now = int(time.time())
    return SyncPullResponse(merged=store, server_timestamp=now)


@router.delete("/reset", status_code=status.HTTP_204_NO_CONTENT)
async def reset(user_id: str = Depends(_require_token)) -> None:
    """
    Wipe the server-side snapshot for this user.
    Useful during development / testing.
    """
    SyncStore.save(user_id, {})
