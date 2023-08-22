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
  liked: boolean;
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

export interface params {
  animalCategory: string;
  productCategory: string;
  sortBy: string;
  searchWord: string;
  pageNumber: number;
  fromSearch?: boolean;
}
