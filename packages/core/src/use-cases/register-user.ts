import { Role } from "@/entities/user.entities";
import { Logger } from "@/libs/logger";
import { UserRepository } from "@/repositories/user.repositories";

export type CreateNewUserDTO={
   name :string;
      phone : string
      role:Role;
      password:string

}
export class CreateNewUserUseCase{
    constructor(private userRepo:UserRepository, private logger:Logger){

    }
   async execute(dto:CreateNewUserDTO){
       
       
        this.validate(dto)
        const existingUser=await this.userRepo.findByNumber(dto.phone);
        if(existingUser){
            throw new Error("phone already used")
        }

        const hashedPassword = `hashed`
        const newUser = await this.userRepo.create(dto);
        return newUser

    }
    validate(dto:
        CreateNewUserDTO
    ){
        if(!dto.name||!dto.phone||!dto.password)
        {
            throw new Error('name email password is required!')
        }
    }
}