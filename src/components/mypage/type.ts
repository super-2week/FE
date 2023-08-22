export interface WishListData {
  animalCategory: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  price: number;
  productCategory: string;
  productId: number;
  productName: string;
  purchaseCount: number;
  stock: number;
  wishCount: number;
  wishId: number;
};

export interface Props {
  handleClick: (tabName: string) => void;
  wishList?: WishListData[] | undefined;
};