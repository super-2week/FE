import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCategory {
  label: string;
  value: string;
  id: string;
}

interface AnimalCategory {
  id: string;
  label: string;
  productCategory: ProductCategory[];
}

interface AnimalCategoryState {
  categories: AnimalCategory[];
  productes: ProductCategory[];
}

const initialState: AnimalCategoryState = {
  categories: [],
  productes: [],
};

const animalCategorySlice = createSlice({
  name: "animalCategories",
  initialState,
  reducers: {
    setAnimalCategories: (
      state: AnimalCategoryState,
      action: PayloadAction<AnimalCategory[]>
    ) => {
      const animalData = action.payload.map((item) => {
        return {
          id: item.id,
          label: item.label,
          productCategory: item.productCategory,
        };
      });
      state.categories = animalData;
    },
    setProductes: (
      state: AnimalCategoryState,
      action: PayloadAction<AnimalCategory[]>
    ) => {
      const productCategories: ProductCategory[] = [];
      // console.log(action.payload);
      action.payload.forEach((animalCategory) => {
        animalCategory.productCategory.forEach((productItem) => {
          productCategories.push({
            id: animalCategory.id,
            label: productItem.label,
            value: productItem.value,
          });
        });
      });
      state.productes = productCategories;
    },
  },
});

export const { setAnimalCategories, setProductes } =
  animalCategorySlice.actions;

export default animalCategorySlice.reducer;
