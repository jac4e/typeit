import { IProduct } from "./product";
import typia, { tags } from "typia";

export interface ICartItem {
    id: IProduct['id'];
    name: IProduct['name'];
    description?: IProduct['description'];
    image?: IProduct['image'];
    price: IProduct['price'];
    amount: bigint | string;
    total: bigint | string;
}

export type ICart = ICartItem[];
export type ICartSerialized = ICartItemSerialized[];

export interface ICartItemSerialized {
    id: IProduct['id'];
    amount: string;
}

export const isICartItem = typia.createEquals<ICartItem>();

export const isICart = typia.createEquals<ICart>();

export const isICartSerialized = typia.createEquals<ICartSerialized>();