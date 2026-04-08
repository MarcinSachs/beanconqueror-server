"""
Minimalist file-based persistence for sync snapshots.

Each user gets a JSON file: data/<user_id>.json
This is intentionally simple – replace with a real DB when ready.
"""
import json
import os
from typing import Any

_DATA_DIR = os.getenv("BC_DATA_DIR", "data")


class SyncStore:
    @staticmethod
    def _path(user_id: str) -> str:
        os.makedirs(_DATA_DIR, exist_ok=True)
        # Sanitise user_id to prevent path traversal
        safe = "".join(c for c in user_id if c.isalnum() or c in "-_")
        if not safe:
            safe = "unknown"
        return os.path.join(_DATA_DIR, f"{safe}.json")

    @classmethod
    def get(cls, user_id: str) -> dict[str, list[dict[str, Any]]]:
        path = cls._path(user_id)
        if not os.path.exists(path):
            return {}
        with open(path, encoding="utf-8") as f:
            return json.load(f)

    @classmethod
    def save(cls, user_id: str, data: dict[str, Any]) -> None:
        path = cls._path(user_id)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False)
