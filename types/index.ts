export type Category = Pick<Product, '_id' | 'image' | 'category'>;

export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type ProductWithAmount = Product & { amount: number };

export interface User {
  tokens: {
    accessToken: string;
    refreshToken: string;
  } | null;
}
