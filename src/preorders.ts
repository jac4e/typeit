import { Document } from "mongoose";
import { keys } from "ts-transformer-keys";
import typia, { tags } from "typia";
import { IAccount } from "./account";


// New item type that acts as a pre-order thing until enough people have pre-ordered it to meet the minimum order quantity
// This is a new type of item that is not a product as products are things that we keep in stock
// State machine, 4 states: ordered, fulfilled, cancelled, unordered

export enum PreOrderStatus {
    Ordered = 'ordered',
    Fulfilled = 'fulfilled',
    Cancelled = 'cancelled',
    Unordered = 'unordered'
}

export interface IPreOrder {
    date: Date | string;
    lastUpdated: Date | string;
    id: string;
    accountId: IAccount['id'];
    amount: bigint | string;
    status: PreOrderStatus;
}

export type IPreOrderForm = Omit<IPreOrder, 'id' | 'date' | 'lastUpdated'>;

export type IPreOrderDocument = Omit<IPreOrder, 'id'>;

export const isIPreOrder = typia.createEquals<IPreOrder>();
export const isIPreOrderForm = typia.createEquals<IPreOrderForm>();

export const keysIPreOrder = keys<IPreOrder>();