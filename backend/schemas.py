from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    password: str
    role: str

class User(BaseModel):
    id: int
    email: str
    role: str
    is_active: bool

    class Config:
        orm_mode = True