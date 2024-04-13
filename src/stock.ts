import { IProduct } from './product';
import typia from "typia";
import { keys } from 'ts-transformer-keys';
import { Model, Schema, Document } from 'mongoose';

// Types
export enum StockEntryType {
    Purchase = 'purchase', // Purchase from supplier
    Shrinkage = 'shrinkage', // Shrinkage due to theft, damage, spoilage, etc.
    Overage = 'overage', // Overage due to miscount, etc.
    Sale = 'sale', // Sale to customer
}

export interface IStockEntry {
    id: string;
    date: Date | string;
    productid: IProduct['id'];
    cost: bigint | string; // Cost per unit at time of entry
    type: StockEntryType;
    delta: bigint | string; // Positive for increase, negative for decrease
    notes?: string;
}

export type IStockEntryForm = Omit<IStockEntry, 'id' | 'date'>;

export type IStockEntryDocument = Omit<IStockEntry, 'id' | 'delta' | 'cost'> & Document & {
    cost: string;
    delta: string;
};

// Type guards
export const isIStockEntry = typia.createEquals<IStockEntry>();
export const isIStockEntryForm = typia.createEquals<IStockEntryForm>();

export const keysIStockEntry = keys<IStockEntry>();
