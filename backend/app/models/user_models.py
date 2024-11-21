from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, Union
from ..core.core import PyObjectId
from datetime import datetime, date
from bson import ObjectId


class User(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)


    email: str
    phone: str = Field(default=None)
    username: str
    createdAt: Optional[datetime] = Field(default=None)
    updatedAt: Optional[datetime] = Field(default=None)
    isActive: bool  = Field(default=None)
    role: str = Field(default= None)

class Profile(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)
    

    userId: PyObjectId
    firstname: str = Field(default= None)
    lastname: str = Field(default= None)
    dateOfBirth: date = Field(default= None)
    bio: str = Field(default= None)
    avatarUrl: str = Field(default= None)
    idnumber: str = Field(default= None)


class Adress(BaseModel):
    street: str
    city: str
    state: str
    zipCode: str
