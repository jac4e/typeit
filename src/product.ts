import { Document } from "mongoose";
import { keys } from "ts-transformer-keys";
import typia, { tags } from "typia";
import { IPreOrder } from "./preorders";

export enum ProductTypes {
  Stock = 'stock', // Stuff we keep in stock
  Order = 'order', // Stuff we order from the supplier after minimum order quantity is met
}

export enum ProductCategories {
  Food = 'food',
  Drinks = 'drinks',
  Clothing = 'clothing',
  Merch = 'merch',
  Other = 'other',
}

type OrderedTypedProperties = {
  type: ProductTypes.Order;
  minimumOrderQuantity: bigint | string;
  preOrders: IPreOrder['id'][];
}

type StockTypedProperties = {
  type: ProductTypes.Stock;
  stockJournalId: string;
}


type TypedProperties = OrderedTypedProperties | StockTypedProperties;

type TypedPropertiesForm = Omit<OrderedTypedProperties, 'type'> | Omit<StockTypedProperties, 'type'>;

export interface IProduct {
  id: string;
  category: ProductCategories;
  name: string;
  description?: string;
  image?: string;
  salePrice: bigint | string;
  purchasePrice: bigint | string;
  typedProperties: TypedProperties;
}

export type IProductForm = Omit<Omit<IProduct, 'id'>, 'typedProperties'> & {
  typedProperties: TypedPropertiesForm;
}

export type IProductDocument = Omit<IProduct, 'id'>;

export const isIProduct = typia.createEquals<IProduct>();
export const isIProductForm = typia.createEquals<IProductForm>();

export const keysIProduct = keys<IProduct>();
