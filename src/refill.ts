import { Document } from 'mongoose';
import { keys } from 'ts-transformer-keys';
import typia, { tags } from "typia";

export enum RefillMethods {
  Cash = "cash",
  Etransfer = "etransfer",
  Card = "card",
  Stripe = "stripe"
}

export enum RefillStatus {
  Pending = "pending",
  Complete = "complete",
  Failed = "failed",
  Cancelled = "cancelled"
}

export interface IRefill {
  id: string;
  account: string;
  method: RefillMethods;
  amount: bigint | string;
  date_created: Date | string;
  date_updated: Date | string;
  status: RefillStatus;
  note?: string;
}

export interface IRefillForm {
  account: IRefill['account'];
  method: IRefill['method'];
  amount: IRefill['amount'];
}

export interface IRefillDocument extends Document {
  account: IRefill['account'];
  method: IRefill['method'];
  amount: IRefill['amount'];
  date_created: IRefill['date_created'];
  date_updated: IRefill['date_updated'];
  status: IRefill['status'];
  note: IRefill['note'];
}

export const isIRefill = typia.createEquals<IRefill>();
export const isIRefillForm = typia.createEquals<IRefillForm>();

export const keysIRefill = keys<IRefill>();
export const keysIRefillForm = keys<IRefillForm>();