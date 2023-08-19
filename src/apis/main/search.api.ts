import axios from "axios";

export const GetSearchData = async (
  animalCategory: string,
  productCategory: string,
  sortBy: string,
  searchWord: string,
  pageNumber: number
) => {
  console.log(searchWord);
  try {
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/${animalCategory}/${productCategory}/${sortBy}?searchWord="${searchWord}"&page=${pageNumber}`
    );
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};
