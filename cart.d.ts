export interface ICartItem {
    id: IProduct['id'];
    name: IProduct['name'];
    description: IProduct['description'];
    image: IProduct['image'];
    price: IProduct['price'];
    amount: bigint;
    total: bigint;
}

export interface ICartItemSerialized {
    id: IProduct['id'];
    amount: string;
}