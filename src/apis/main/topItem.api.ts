import axios from "axios";
export const GetTopData = async (
  animalCategory: string,
  productCategory: string
) => {
  try {
    const res = await axios.get(
      // `https://pet-commerce.shop/v1/api/popular/${animalCategory}/${productCategory}`
      "https://run.mocky.io/v3/bea1aca4-2907-4aee-9075-a5e931c2628b"
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
    throw error;
  }
};
