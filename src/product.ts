import { Document } from "mongoose";
import { keys } from "ts-transformer-keys";
import TSON from 'typescript-json';

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

export function isIProduct(product: any): product is IProduct {
  return TSON.equals<IProduct>(product);   
}

export const keysIProduct = keys<IProduct>();
