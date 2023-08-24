import api from "../../interceptor";

export const PostLiked = async (productId: number) => {
  try {
    console.log("좋아요 등록");
    const res = await api.post(
      `https://pet-commerce.shop/v1/api/product/wish/${productId}`
    );
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};

export const DeleteLiked = async (productId: number) => {
  try {
    console.log("좋아요 취소");
    const res = await api.delete(
      `https://pet-commerce.shop/v1/api/product/wish/${productId}`
    );
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};
