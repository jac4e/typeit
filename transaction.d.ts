import { IProduct } from './product';

export enum TransactionType {
  Debit = 'debit',
  Credit = 'credit'
}

export interface ITransaction {
  id: string;
  date: Date;
  accountid?: string;
  type: TransactionType;
  reason: string;
  products: ITransactionItem[];
  total: bigint;
}

export interface ITransactionForm {
  accountid: ITransaction['accountid'];
  type: ITransaction['type'];
  reason: ITransaction['reason'];
  products: ITransaction['products'];
  total: string;
}

export interface ITransactionItem {
  name: IProduct['name'];
  description: IProduct['description'];
  price: string;
  amount: string;
  total: string;
}
