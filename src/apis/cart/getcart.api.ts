import axios from "axios";

type CartList = {
  cartId: number;
  imageUrl: string;
  price: number;
  productId: number;
  productName: string;
  quantity: number;
  total: number;
};
export const Loadcart = async (
  cursor: number,
  pagesize: number,
  token: string | null,
  setList: (value: React.SetStateAction<CartList[]>) => void
) => {
  try {
    console.log(token);
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/carts?cursor=${cursor}&pageSize=${pagesize}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = res.data.content;
    console.log("data", data);
    setList(data);
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
