export enum TransactionEnum{
    EXPENSE="expense",
    INCOME="income",
    TRANSFER="transfer"
}
export type TransactionType=`${TransactionEnum}`
export interface Transaction{
    user_id:string;
    group_id:string;
    title:string;
    amount:number;
    is_shared:boolean;
    paid_by:number;
    month:string;
    created_at:Date;
    type:TransactionType
}