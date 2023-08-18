import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalCategoryState {
  category: string;
}

const initialState: AnimalCategoryState = {
  category: "dog",
};

const animalCategoryStateSlice = createSlice({
  name: "animalCategoryState",
  initialState,
  reducers: {
    setAnimalCategory: (
      state: AnimalCategoryState,
      action: PayloadAction<string>
    ) => {
      console.log(action.payload);
      state.category = action.payload;
    },
  },
});

export const { setAnimalCategory } = animalCategoryStateSlice.actions;

export default animalCategoryStateSlice.reducer;
