import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalCategoryState {
  category: string;
  label: string;
}

const initialState: AnimalCategoryState = {
  category: "dog",
  label: "강아지",
};

const animalCategoryStateSlice = createSlice({
  name: "animalCategoryState",
  initialState,
  reducers: {
    setAnimalCategory: (
      state: AnimalCategoryState,
      action: PayloadAction<string>
    ) => {
      state.category = action.payload;
    },
    setAnimalLabel: (
      state: AnimalCategoryState,
      action: PayloadAction<string>
    ) => {
      console.log(action.payload);
      state.label = action.payload;
    },
  },
});

export const { setAnimalCategory, setAnimalLabel } =
  animalCategoryStateSlice.actions;

export default animalCategoryStateSlice.reducer;
