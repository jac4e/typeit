import { IProduct } from "./product";
import typia, { tags } from "typia";

export interface ICartItem extends IProduct {
    amount: bigint | string;
    total: bigint | string;
}

export interface ICartItemSerialized {
    id: IProduct['id'];
    amount: string;
}

export type ICart = ICartItem[];
export type ICartSerialized = ICartItemSerialized[];

export const isICartItem = typia.createEquals<ICartItem>();
export const isICart = typia.createEquals<ICart>();
export const isICartSerialized = typia.createEquals<ICartSerialized>();