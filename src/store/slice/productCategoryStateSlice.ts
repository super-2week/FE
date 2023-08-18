import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCategoryState {
  category: string;
}

const initialState: ProductCategoryState = {
  category: "food",
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
  },
});

export const { setProductCategory } = productCategoryState.actions;

export default productCategoryState.reducer;
