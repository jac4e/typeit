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
  reference: string;
  amount: bigint | string;
  dateCreated: Date | string;
  dateUpdated: Date | string;
  status: RefillStatus;
  note?: string;
}

// export interface EtransferRefill extends RefillBase {
//   method: RefillMethods.Etransfer;
// }

// export interface CashRefill extends RefillBase {
//   method: RefillMethods.Cash;
// }

// export interface CardRefill extends RefillBase {
//   method: RefillMethods.Card;
// }

// export interface StripeRefill extends RefillBase {
//   method: RefillMethods.Stripe;
// }

// export type IRefill = EtransferRefill | CashRefill | CardRefill | StripeRefill;
export type IRefillDocumentNew = Document & IRefill;

export interface IRefillForm {
  account: IRefill['account'];
  method: IRefill['method'];
  amount: IRefill['amount'];
}

export const isIRefill = typia.createEquals<IRefill>();
export const isIRefillForm = typia.createEquals<IRefillForm>();

export const keysIRefill = keys<IRefill>();
export const keysIRefillForm = keys<IRefillForm>();