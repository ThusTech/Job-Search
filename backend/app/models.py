from pydantic import BaseModel, Field
from typing import Optional


class Job(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    