"""Entry point – run from the project root:

    python run.py

or via uvicorn directly:

    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
"""
import uvicorn

from app.config import HOST, PORT

if __name__ == "__main__":
    uvicorn.run("app.main:app", host=HOST, port=PORT, reload=True)
