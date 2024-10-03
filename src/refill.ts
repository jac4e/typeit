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
  Failed = "failed"
}

export interface IRefill {
  id: string;
  account: string;
  method: RefillMethods;
  amount: bigint | string;
  date: Date;
  status: RefillStatus;
  note?: string;
}

export interface IRefillDocument extends Document {
  account: IRefill['account'];
  method: IRefill['method'];
  amount: IRefill['amount'];
  date: IRefill['date'];
  status: IRefill['status'];
  note: IRefill['note'];
}

export const isIRefill = typia.createEquals<IRefill>();

export const keysIRefill = keys<IRefill>();
