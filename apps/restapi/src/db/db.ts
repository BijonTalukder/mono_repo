import { Low } from "lowdb";
import { JSONFile } from 'lowdb/node'
import lodash from 'lodash'
export type role = 'admin'|'user'
export type User={
    id:string;
    name:string;
    email:string;
    password :string;
    role:role;
    group_id:string;
}
export type Group={
    id:string;
    name:string;
    created_at:Date;
    created_by:string;
    month:string;
    total_number:number;

}
export type TransactionType='income'|'expense'
export type Transaction={
    id:string;
    user_id:string;
    group_id:string;
    title:string;
    amount:number;
    type:TransactionType;
    is_shared:boolean;
    paid_by:string;
    month:string;
    created_at:Date
}
type db={
    user:User[],
    group:Group[],
    transaction:Transaction[]
}
const defaultData:db={
    user:[],
    group:[],
    transaction:[]

}
class LowWithLodash<T> extends Low<T>{
      chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')

}
const adapter = new JSONFile<db>('db.json')

export const db = new LowWithLodash(adapter,defaultData)
// await db.read()