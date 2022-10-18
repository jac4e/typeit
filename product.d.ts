export interface IProduct {
    id: string;
    name: string;
    description?: string;
    image?: string;
    price: bigint;
    stock: bigint;
  }
  
  export interface IProductForm {
    name: IProduct['name'];
    description: IProduct['description'];
    image: IProduct['image'];
    price: IProduct['price'];
    stock: IProduct['stock'];
  }
  

  