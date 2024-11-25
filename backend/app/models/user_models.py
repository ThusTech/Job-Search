from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, Union
from ..core.core import PyObjectId
from datetime import datetime, date
from bson import ObjectId


class User(BaseModel):
    email: str
    phone: str = Field(default=None)
    username: str
    createdAt: Optional[datetime] = Field(default_factory = lambda: datetime.now())
    updatedAt: Optional[datetime] = Field(default_factory = lambda: datetime.now())
    isActive: bool  = Field(default=None)
    role: str = Field(default= None)

    class Config:
        json_encoders = { ObjectId: str }
        arbitrary_types_allowed = True
        populate_by_name = True

class Profile(BaseModel):
    userId: Optional[PyObjectId]
    firstname: str
    lastname: str
    dateOfBirth: date = Field(default= None)
    bio: str = Field(default= None)
    avatarUrl: str = Field(default= None)
    idnumber: str = Field(default= None)

    class Config:
        json_encoders = {ObjectId: str}
        arbitrary_types_allowed = True
        populate_by_name = True


class Adress(BaseModel):
    street: str
    city: str
    state: str
    zipCode: str
