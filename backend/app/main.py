from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import jobs
from .routes import auth
from .database.database import Database
from contextlib import asynccontextmanager



@asynccontextmanager
async def lifespan(app: FastAPI):
    await Database.ping_server()
    yield
    await Database.shutdown()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["https://job-search-black-sigma.vercel.app", "http://localhost:5173", ],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)   

app.include_router(jobs.router)
app.include_router(auth.router)




