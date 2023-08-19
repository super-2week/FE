import { configureStore } from "@reduxjs/toolkit";
import myPageReducer from "./slice/myPageSlice";
import totalPriceReducer from "./slice/totalPriceSlice";
import animalCategorySlice from "./slice/animalCategoriesSlice";

import animalCategoryStateSlice from "./slice/animalCategoryStateSlice";
import productCategoryStateSlice from "./slice/productCategoryStateSlice";
import modalSlice from "./slice/modalSlice";

const store = configureStore({
  reducer: {
    myPage: myPageReducer,
    totalPrice: totalPriceReducer,
    animalCategories: animalCategorySlice,
    animalCategory: animalCategoryStateSlice,
    productCategory: productCategoryStateSlice,
    modalState: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
