import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface params {
  animalCategory: string;
  productCategory: string;
  sortBy: string;
  searchWord: string;
  pageNumber: number;
}

const initialState: params = {
  animalCategory: "",
  productCategory: "",
  sortBy: "",
  searchWord: "",
  pageNumber: 1,
};

const itemListSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    setSearchWord: (state: params, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.searchWord = action.payload;
    },
    setSearchData: (state, action) => {
      console.log(action.payload);
      // state.searchData = action.payload;
    },
  },
});

export const { setSearchWord, setSearchData } = itemListSlice.actions;

export default itemListSlice.reducer;
