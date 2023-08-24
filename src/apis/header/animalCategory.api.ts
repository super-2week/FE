import axios from "axios";

export const GetAnimalCategory = async () => {
  try {
    const res = await axios.get(
      // "https://run.mocky.io/v3/b39e8817-561b-4742-acf3-f30320c826c3"
      "https://pet-commerce.shop/v1/api/navi"
    );
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
