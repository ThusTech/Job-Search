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