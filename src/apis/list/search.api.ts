import axios from "axios";

// 전체검색
export const GetSearchData = async (
  animalCategory: string,
  productCategory: string,
  sortBy: string,
  searchWord?: string,
  pageNumber?: number
) => {
  // console.log(pageNumber);
  try {
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
    // console.log("연관검색어");
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/search?searchWord=${searchWord}`
    );
    return res.data;
  } catch (error) {
    console.error("error!! :", error);
  }
};

export const GetTotalSearchData = async (
  searchWord: string,
  sortBy: string
) => {
  console.log(searchWord, sortBy);
  // console.log("api에서는 searchWord :", searchWord);
  try {
    // console.log("전체검색");
    const res = await axios.get(
      `https://pet-commerce.shop/v1/api/total/${sortBy}?searchWord=${searchWord}`
    );
    return res.data;
  } catch (error) {
    console.error("error !! :", error);
  }
};
