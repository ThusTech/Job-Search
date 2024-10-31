from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import jobs
from .database import Database
from contextlib import asynccontextmanager



@asynccontextmanager
async def lifespan(app: FastAPI):
    await Database.ping_server()
    yield
    await Database.shutdown()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)   

app.include_router(jobs.router)




