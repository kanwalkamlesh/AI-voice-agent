from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def serve_html():
    with open("index.html", "r") as f:
        return f.read()