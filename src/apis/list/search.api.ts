import axios from "axios";

export const GetSearchData = async (
  animalCategory: string,
  productCategory: string,
  sortBy: string,
  searchWord?: string,
  pageNumber?: number
) => {
  // console.log(searchWord);
  try {
    // if문 필요한가? searchWord, pageNumber 안보내면 어떻게 되는지?
    const queryString = `?searchWord=${searchWord}&page=${pageNumber}`;
    const url = `https://pet-commerce.shop/v1/api/product/${animalCategory}/${productCategory}/${sortBy}${queryString}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};

export const GetRelatedSearchData = async (searchWord: string) => {
  try {
    console.log("연관검색어");
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/search?searchWord=${searchWord}`
    );
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};

export const GetTotalSearchData = async (searchWord: string) => {
  try {
    console.log("전체검색");
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/total?searchWord=${searchWord}`
    );
    return res.data;
  } catch (error) {
    console.error("error !! :", error);
  }
};
