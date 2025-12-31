from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Beanconqueror Server")

# frontend host
app.mount(
    "/",
    StaticFiles(directory="www", html=True),
    name="frontend",
)
