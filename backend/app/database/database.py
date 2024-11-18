import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from ..utils.config import settings



class Database():
    uri = settings.MONGO_URI
    _client = None

    @classmethod
    async def ping_server(cls):
        cls._client = AsyncIOMotorClient(cls.uri)

        try:
            await cls._client.admin.command("ping")
        except Exception as e:
            print(e)

    @classmethod
    async def database(cls, database:str):
        if cls._client is None:
            await cls.ping_server()
        return cls._client[database]
    
    @classmethod
    async def shutdown(cls):
        if cls._client:
            cls._client.close()
            cls._client = None
