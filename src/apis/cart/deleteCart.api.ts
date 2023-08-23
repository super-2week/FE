import axios from "axios";

export const Deletecart = async (
  cartId: number,
  token: string | null,
) => {
  try {
    console.log(token);
    const res = await axios.delete(
      `https://pet-commerce.shop/v1/api/carts/${cartId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = res;
    console.log(data);
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
    