import { IProduct } from "./product";
import TSON from 'typescript-json';

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

export function isICartItem(cartItem: any): cartItem is ICartItem {
    return TSON.equals<ICartItem>(cartItem);
}

export function isICart(cart: any): cart is ICart {
    return TSON.equals<ICart>(cart);
}

export function isICartSerialized(cart: any): cart is ICartSerialized {
    return TSON.equals<ICartSerialized>(cart);
}