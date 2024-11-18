from fastapi import APIRouter, HTTPException
from ..database.database import Database
from ..models import Job
from bson import ObjectId


router = APIRouter()

@router.get("/jobs")
async def get_jobs():
    db = await Database.database("JobListing")
    jobs_cursor = db["Jobs"].find()

    jobs_list = await jobs_cursor.to_list()

    if not jobs_cursor:
        raise HTTPException(status_code = 404, detail = "No jobs found")
    
    return jobs_list


@router.get("/jobs/{job_id}")
async def get_job(job_id:str):
    db = await Database.database("JobListing")
    job = await db["Jobs"].find_one({"_id": job_id})

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    
    return job

    