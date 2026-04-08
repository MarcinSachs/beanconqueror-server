"""Pydantic models shared across the API."""
from typing import Any

from pydantic import BaseModel

# ---------------------------------------------------------------------------
# Sync models
# ---------------------------------------------------------------------------

# The collections that Beanconqueror stores in UIStorage (DB_PATH keys)
SYNC_COLLECTIONS = [
    "BEANS",
    "BREWS",
    "MILL",
    "PREPARATION",
    "WATER",
    "GREEN_BEANS",
    "GRAPHS",
    "ROASTING_MACHINE",
    "SETTINGS",
    "VERSION",
]


class SyncPushRequest(BaseModel):
    """
    Payload sent by the app when pushing local data to the server.

    Each key matches a UIStorage DB_PATH (e.g. "BEANS", "BREWS").
    The value is the array of entries as stored by Beanconqueror.
    Only the collections that changed since the last sync need to be sent,
    but the full snapshot is also accepted.
    """

    collections: dict[str, list[dict[str, Any]]]
    # Optional: client reports its current unix timestamp so the server can
    # compute deltas in the response without an extra round-trip.
    client_timestamp: int | None = None


class SyncPullResponse(BaseModel):
    """
    Response returned to the app after a push (or a standalone pull).

    merged: the server-side merged state (only collections the client sent,
            or all collections on a full pull).
    server_timestamp: unix timestamp of this response (use as next
                      client_timestamp on the following push).
    """

    merged: dict[str, list[dict[str, Any]]]
    server_timestamp: int
