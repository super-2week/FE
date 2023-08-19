export interface ProductImage {
  id: number;
  imageUrl: string;
  animalCategory: string;
  productCategory: string;
  productName: string;
  price: number;
  description: string;
  stock: number;
  wishCount: number;
  purchaseCount: number;
  createdAt: string;
  isRight?: boolean;
  imgInfo: "";
}

export interface Product {
  id: number;
  imageUrl: string;
  animalCategory: string;
  productCategory: string;
  productName: string;
  price: number;
  description: string;
  stock: number;
  wishCount: number;
  purchaseCount: number;
  createdAt: string;
}

export interface TodayProductItem {
  createdAt: string;
  purchaseCount: number;
  price: number;
  imageUrl: string;
  animalCategory: string;
  description: string;
  id: number;
  stock: number;
  wishCount: number;
  productName: string;
  productCategory: string;
}

export interface TodayProduct {
  category: string;
  product: TodayProductItem[];
}
