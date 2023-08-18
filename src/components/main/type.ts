export interface ImageInfo {
  id: number;
  imgSrc: string;
  state: string;
  title: string;
  desc: string;
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
