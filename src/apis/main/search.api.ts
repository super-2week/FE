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
    const queryString = `?searchWord=${searchWord}&page=${pageNumber}`;
    const url = `https://pet-commerce.shop/v1/api/product/${animalCategory}/${productCategory}/${sortBy}${queryString}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};
