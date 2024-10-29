from fastapi import APIRouter, HTTPException
from ..database.database import db


router = APIRouter()

@router.get("/jobs")
async def getJobs():
    jobs = await db["name_of_collection"].find()

    if not jobs:
        raise HTTPException(status_code = 404, detail = "No jobs found")
    
    return jobs