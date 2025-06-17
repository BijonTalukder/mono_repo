import { User } from "@/entities/user.entities";
import { CreateNewUserDTO } from "@/use-cases/register-user";

export interface UserRepository{
    findByNumber(number:string):Promise<User|null>;
    findById(id:string):Promise<User|null>;
    create(dto:CreateNewUserDTO):Promise<User>;
}