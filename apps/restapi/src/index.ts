import {CreateNewUserUseCase} from "@ocmo/core/use-cases/register-user"
import {InMemoryUserRepository} from  "@ocmo/database"

import express,{Application} from 'express'

const app:Application=express()
const createUser= new CreateNewUserUseCase(new InMemoryUserRepository)


createUser.execute({
    name:"jhone doe",
    password:"adfsd",
    phone:"01231231",
    role:"user"
})
app.listen(300,()=>{

})