import { Group } from "@/entities/group.entities";

export interface GroupRepository{
    findById(id:string):Promise<Group | null>

    findByUserId(id:string):Promise<Group[] | null>



}