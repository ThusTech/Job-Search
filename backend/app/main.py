from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.routes import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_header = ["*"]
)

app.include_router(router)