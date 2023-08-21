import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/main/type";

interface ListData {
  totalLength: number;
  products: Product[];
}

const initialState: ListData = {
  totalLength: 0,
  products: [],
};

const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    setDataList: (
      state: ListData,
      action: PayloadAction<{ products: Product[]; totalLength: number }>
    ) => {
      // console.log(action.payload);
      state.products = action.payload.products;
      state.totalLength = action.payload.totalLength;
    },
  },
});

export const { setDataList } = listSlice.actions;
export default listSlice.reducer;
