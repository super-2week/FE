import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCategoryState {
  category: string;
  label: string | null | undefined;
}

const initialState: ProductCategoryState = {
  category: "food",
  label: "사료",
};

const productCategoryState = createSlice({
  name: "productCategoryState",
  initialState,
  reducers: {
    setProductCategory: (
      state: ProductCategoryState,
      action: PayloadAction<string>
    ) => {
      state.category = action.payload;
    },
    setProductlabel: (
      state: ProductCategoryState,
      action: PayloadAction<string | null | undefined>
    ) => {
      // console.log(action.payload);
      state.label = action.payload;
    },
  },
});

export const { setProductCategory, setProductlabel } =
  productCategoryState.actions;

export default productCategoryState.reducer;
