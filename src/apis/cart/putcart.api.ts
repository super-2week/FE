import axios from "axios";

// type CartList = 
//   {
//     cartId: number;
//     imageUrl: string;
//     price: number;
//     productId: number;
//     productName: string;
//     quantity: number;
//     total: number;
//   }
// ;

export const putCart = async (
  cartId: number,
  productId: number,
  quantity: number,
  token: string | null,
  setCount: (value: React.SetStateAction<number>) => void
) => {
  try {
    console.log(token);
    const res = await axios.put(
      `https://pet-commerce.shop/v1/api/carts`,
      { cartId: cartId, productId: productId, quantity: quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = res.data;
    console.log("data", data);
    // setCount(data);
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
