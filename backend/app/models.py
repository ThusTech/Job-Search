from pydantic import BaseModel, Field
from typing import Optional


class Job(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    title: str
    type : str
    description: str
    location: str
    salary: str
    company: object


class Company(BaseModel):
    name: str
    description: str
    contactEmail: str
    contactPhone: str