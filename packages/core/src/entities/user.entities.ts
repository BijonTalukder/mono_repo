
export type Role = "admin" | "user" 

export interface User{
    id:string;
    name :string;
    phone : string
    role:Role
    group_id:string
}