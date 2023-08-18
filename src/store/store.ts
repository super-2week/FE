import { configureStore } from "@reduxjs/toolkit";
import myPageReducer from "./slice/myPageSlice";
import totalPriceReducer from "./slice/totalPriceSlice";
import animalCategorySlice from "./slice/animalCategoriesSlice";

import animalCategoryStateSlice from "./slice/animalCategoryStateSlice";
import productCategoryStateSlice from "./slice/productCategoryStateSlice";

const store = configureStore({
  reducer: {
    myPage: myPageReducer,
    totalPrice: totalPriceReducer,
    animalCategories: animalCategorySlice,
    animalCategory: animalCategoryStateSlice,
    productCategory: productCategoryStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
