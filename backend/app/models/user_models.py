from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, Union
from ..core.core import PyObjectId
from datetime import datetime, date
from bson import ObjectId


class User(BaseModel):
    email: str
    phone: str = Field(default=None)
    username: str
    createdAt: Optional[datetime] = Field(default=None)
    updatedAt: Optional[datetime] = Field(default=None)
    isActive: bool  = Field(default=None)
    role: str = Field(default= None)

    class Config:
        json_encoders = { ObjectId: str }
        arbitrary_types_allowed = True
        allow_population_by_field_name = True

class Profile(BaseModel):
    userId: Optional[PyObjectId]
    firstname: str = Field(default= None)
    lastname: str = Field(default= None)
    dateOfBirth: date = Field(default= None)
    bio: str = Field(default= None)
    avatarUrl: str = Field(default= None)
    idnumber: str = Field(default= None)

    class Config:
        json_encoders = {ObjectId: str}
        arbitrary_types_allowed = True
        allow_population_by_field_name = True


class Adress(BaseModel):
    street: str
    city: str
    state: str
    zipCode: str
