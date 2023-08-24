import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface params {
  animalCategory: string;
  productCategory: string;
  sortBy: string;
  searchWord: string;
  pageNumber: number;
  fromSearch?: boolean;
}

const initialState: params = {
  animalCategory: "dog",
  productCategory: "food",
  sortBy: "price",
  searchWord: "",
  pageNumber: 1,
  fromSearch: false,
};

const parameterSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    setSearchWord: (state: params, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.searchWord = action.payload;
    },
    setpageNumber: (state: params, action: PayloadAction<number>) => {
      // console.log(action.payload);
      state.pageNumber = action.payload;
    },
    setsortBy: (state: params, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.sortBy = action.payload;
    },
    setItemAnimalCategory: (state: params, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.animalCategory = action.payload;
    },
    setItemProductCategory: (state: params, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.productCategory = action.payload;
    },
    setFromSearch: (state: params, action: PayloadAction<boolean>) => {
      // console.log("fromSearch :", action.payload);
      state.fromSearch = action.payload;
    },
  },
});

export const {
  setSearchWord,
  setpageNumber,
  setsortBy,
  setItemAnimalCategory,
  setItemProductCategory,
  setFromSearch,
} = parameterSlice.actions;

export default parameterSlice.reducer;
