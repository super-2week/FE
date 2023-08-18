import axios from "axios";

export const GetBannerData = async (animalCatrgory: string) => {
  try {
    const res = await axios.get(
      `https://pet-commerce.shopapi/banner/${animalCatrgory}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
