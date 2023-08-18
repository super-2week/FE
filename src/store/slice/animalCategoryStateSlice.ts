import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalCategoryState {
  category: string;
}

interface AnimalCategoryLabel {
  label: string;
}

const initialState: AnimalCategoryState = {
  category: "dog",
  // label:'강아지'
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
    setAnimalLabel: (state, action) => {
      console.log(action.payload);
      // state
    },
  },
});

export const { setAnimalCategory } = animalCategoryStateSlice.actions;

export default animalCategoryStateSlice.reducer;
