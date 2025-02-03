

// export interface IProduct {
//     title: string;
//     description: string;
//     price: string;
//     productImage: string;

// }

// interface Product {
//     id: string;
//     title: string;
//     price: number;
//     discountPercentage?: number;
//     category?: string;
//     image?: string;
//     description: string;
//   }



export interface Product {
  id: string;
  category?: string;
  productImage: string;
  price: number;
  tags: string[];
  description: string;
  isNew: boolean;
  title: string;
  dicountPercentage: number;
  stockLevel: number;
  isFeaturedProduct: number;
  inventory: number;
}





