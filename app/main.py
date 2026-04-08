from typing import Any

from fastapi import FastAPI, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.config import CORS_ORIGINS, WWW_DIR
from app.routers import sync as sync_router

app = FastAPI(title="Beanconqueror Server", version="0.1.0")

# ---------------------------------------------------------------------------
# CORS – allow the Angular app (served from any origin during dev) to call
# the API.  In production, replace "*" with the actual origin.
# ---------------------------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Routers
# ---------------------------------------------------------------------------

app.include_router(sync_router.router)

# ---------------------------------------------------------------------------
# API routes  (must be declared before the SPA catch-all mount)
# ---------------------------------------------------------------------------


@app.get("/api/health", tags=["meta"])
async def health() -> dict:
    """Simple liveness probe."""
    return {"status": "ok"}


@app.get("/Roaster/GetBeanFromQrCodeId", tags=["roaster"])
async def get_bean_from_qr(id: str = Query(..., description="QR-code identifier")) -> Any:
    """
    Called by Beanconqueror when the user scans a bean QR code.
    Returns bean metadata or an error structure when not found.
    """
    # TODO: look up bean in a database and return a ServerBean-compatible dict.
    return {
        "error": {
            "message": "Bean not found",
            "errorCode": "BEAN_NOT_FOUND",
            "messageDetail": f"No bean registered for QR id '{id}'",
            "statusCode": 404,
        }
    }


@app.put("/Roaster/TrackBrew", tags=["roaster"])
async def track_brew(request: Request) -> dict:
    """
    Called by Beanconqueror to upload a brew entry to the server.
    Accepts a ServerBrew-compatible JSON body.
    """
    # TODO: validate and persist brew data.
    brew: dict = await request.json()
    return {"received": True, "brew_id": brew.get("brew_id")}


# ---------------------------------------------------------------------------
# SPA static-file serving with Angular-router fallback
#
# StaticFiles(html=True) returns 404 for paths that don't map to a real file
# (e.g. /home, /beans/detail/123).  The subclass below catches those 404s
# and serves index.html instead so Angular's client-side router takes over.
# ---------------------------------------------------------------------------


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope: dict):
        try:
            return await super().get_response(path, scope)
        except StarletteHTTPException as exc:
            if exc.status_code == 404:
                return await super().get_response("index.html", scope)
            raise


app.mount("/", SPAStaticFiles(directory=WWW_DIR, html=True), name="frontend")

