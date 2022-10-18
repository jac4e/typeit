import { Document } from "mongoose";

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  image?: string;
  price: bigint | string;
  stock: bigint | string;
}

export interface IProductForm {
  name: IProduct['name'];
  description?: IProduct['description'];
  image?: IProduct['image'];
  price: IProduct['price'];
  stock: IProduct['stock'];
}

export interface IProductDocument extends Document {
  name: IProduct['name'];
  description?: IProduct['description'];
  image?: IProduct['image'];
  price: string;
  stock: string;
}
