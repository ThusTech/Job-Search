from pydantic import BaseModel, Field
from typing import Optional, Union


class Job(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    title: str
    type : str
    description: str
    location: str
    salary: Union[str, float, int]
    company: object


class Company(BaseModel):
    name: str
    description: str
    contactEmail: str
    contactPhone: str


class User(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    role: str
    firstName: str
    lastName: str
    email: str
    phone: str
    image: str