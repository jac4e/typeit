import { IProduct } from './product';
import { Document } from 'mongoose';
import typia, { tags } from "typia";
import { keys } from 'ts-transformer-keys';
import { ICartItem } from './cart';

export enum TransactionType {
    Debit = 'debit',
    Credit = 'credit'
}

export interface ITransaction {
    date: Date | string;
    id: string;
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
    total: string;
}

export interface ITransactionItem {
    name: ICartItem['name'];
    description?: ICartItem['description'];
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
    total: string;
}

export const isITransaction = typia.createEquals<ITransaction>();
export const isITransactionForm = typia.createEquals<ITransactionForm>();

export const keysITransaction = keys<ITransaction>();
