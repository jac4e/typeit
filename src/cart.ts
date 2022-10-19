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

export interface ICartItemSerialized {
    id: IProduct['id'];
    amount: string;
}

export function isICartItem(cartItem: any): cartItem is ICartItem {
    return TSON.equals<ICartItem>(cartItem);
}