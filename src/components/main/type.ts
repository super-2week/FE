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

// 확장
export interface ProductImage extends Product {
  isRight?: boolean;
  imgInfo: "";
}

// 확장
export interface TodayProductItem extends Product {
  description: string;
}

export interface TodayProduct {
  category: string;
  product: TodayProductItem[];
}
