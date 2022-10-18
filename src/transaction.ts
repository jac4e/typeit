import { IProduct } from './product';
import { Document } from 'mongoose';

export enum TransactionType {
    Debit = 'debit',
    Credit = 'credit'
}

export interface ITransaction {
    id: string;
    date: Date;
    accountid: string;
    type: TransactionType;
    reason: string;
    products: ITransactionItem[];
    total: bigint | string;
}

export interface ITransactionForm {
    accountid: ITransaction['accountid'];
    type: ITransaction['type'];
    reason: ITransaction['reason'];
    products: ITransaction['products'];
    total: ITransaction['total'];
}

export interface ITransactionItem {
    name: IProduct['name'];
    description?: IProduct['description'];
    price: string;
    amount: string;
    total: string;
}

export interface ITransactionDocument extends Document {
    date: ITransaction['date'];
    accountid: ITransaction['accountid'];
    type: ITransaction['type'];
    reason: ITransaction['reason'];
    products: ITransaction['products'];
    total: ITransaction['total'];
}
