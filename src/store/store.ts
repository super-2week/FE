import { configureStore } from "@reduxjs/toolkit";
import myPageReducer from "./slice/myPageSlice";
import totalPriceReducer from "./slice/totalPriceSlice";
import animalCategoryReducer from "./slice/animalCategorySlice";

const store = configureStore({
  reducer: {
    myPage: myPageReducer,
    totalPrice: totalPriceReducer,
    animalCategory: animalCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
