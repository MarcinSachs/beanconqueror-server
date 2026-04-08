import json
import os

# Network
HOST: str = os.getenv("BC_HOST", "0.0.0.0")
PORT: int = int(os.getenv("BC_PORT", "8000"))

# CORS – comma-separated list of allowed origins, or "*" for all
CORS_ORIGINS: list[str] = os.getenv("BC_CORS_ORIGINS", "*").split(",")

# Path to the built Beanconqueror web bundle
WWW_DIR: str = os.getenv("BC_WWW_DIR", "www")

# ---------------------------------------------------------------------------
# Sync auth tokens
#
# Format: JSON object mapping  token → user_id
# Example env var:
#   BC_SYNC_TOKENS='{"mysecrettoken123": "alice", "anothertoken": "bob"}'
#
# For development a single default token is provided so you can test
# immediately without configuration. REMOVE IT IN PRODUCTION.
# ---------------------------------------------------------------------------
_default_tokens = '{"dev-token-change-me": "dev-user"}'
SYNC_TOKENS: dict[str, str] = json.loads(
    os.getenv("BC_SYNC_TOKENS", _default_tokens)
)
