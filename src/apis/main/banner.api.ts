import axios from "axios";

export const GetBannerData = async (animalCategory: string) => {
  try {
    const res = await axios.get(
      // `https://pet-commerce.shop/v1/api/banner/${animalCatrgory}`
      "https://run.mocky.io/v3/d7c21411-cf79-4764-a6b7-5d94012adc23"
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
