import axios from "axios";

export const GetTodayData = async (animalCategory: string) => {
  try {
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/recommend/${animalCategory}`
      // "https://run.mocky.io/v3/b94dd35e-bcc4-4923-932e-34f880337c78"
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("error!!", error);
    throw error;
  }
};
