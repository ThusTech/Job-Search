from pydantic import BaseModel, Field, EmailStr, StringConstraints
from typing_extensions import Annotated
from ..core.core import PyObjectId
from bson import ObjectId

class Signup(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    password: Annotated[
        str,
        StringConstraints(strip_whitespace=True,
                          min_length=8,
                          max_length=30)
    ]

class Signin(BaseModel):
    email: EmailStr
    password: Annotated[
        str, 
        StringConstraints(strip_whitespace=True,
                            min_length=8,
                            max_length=30)
        ]

class Auth(BaseModel):
    email: EmailStr
    hashedPassword: str
    accessToken: bytes = Field(default=None)
    refreshToken: bytes = Field(default=None)

    class Config:
        populate_by_name = True
        json_encoders = { ObjectId: str }
        arbitrary_types_allowed = True
