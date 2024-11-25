from pydantic import BaseModel, Field
from typing import Optional, Union
from ..core.core import PyObjectId
from bson import ObjectId

class Signup(BaseModel):
    firstname: str
    lastname: str
    email: str
    password: str

class Signin(BaseModel):
    email: str
    password: str

class Auth(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory = PyObjectId, alias="_id")
    email: str
    hashedPassword: str
    accessToken: bytes = Field(default=None)
    refreshToken: bytes = Field(default=None)

    class Config:
        populate_by_name = True
        json_encoders = { ObjectId: str }
        arbitrary_types_allowed = True
