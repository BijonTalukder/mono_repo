import { UserRepository } from "@/repositories/user.repositories";

export class UserLoginUseCase{
    constructor(private readonly userRepo:UserRepository){

    }
    async execute(email:string,password:string){
        const existingUser = await this.userRepo.findByNumber(email)
   
   if(!existingUser){
    throw new Error("user not exist")
   }
    }
}