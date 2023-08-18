import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface defaultAnimalCategoryType {
  category: string;
}

const initialState: defaultAnimalCategoryType = {
  category: "dog",
};

const clickAnimalCategory = createSlice({
  name: "myPage",
  initialState: initialState,
  reducers: {
    setAnimalCategory: (
      state: defaultAnimalCategoryType,
      action: PayloadAction<string>
    ) => {
      state.category = action.payload;
    },
  },
});

export const { setAnimalCategory } = clickAnimalCategory.actions;
// export const { setMinus } = clickAnimalCategory.actions;

export default clickAnimalCategory.reducer;
