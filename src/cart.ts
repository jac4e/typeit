import { IProduct } from "./product";

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