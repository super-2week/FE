import { configureStore } from "@reduxjs/toolkit";

import myPageReducer from "./slice/myPageSlice";
import totalPriceReducer from "./slice/totalPriceSlice";
import animalCategorySlice from "./slice/animalCategoriesSlice";

import animalCategoryStateSlice from "./slice/animalCategoryStateSlice";
import productCategoryStateSlice from "./slice/productCategoryStateSlice";
import modalSlice from "./slice/modalSlice";
import parameterSlice from "./slice/parameterSilce";
import listSlice from "./slice/listSlice";

import userReducer from "../store/slice/userSlice";
import authSlice from "../store/slice/authSlice";

import sendCardReducer from "./slice/sendCartSlice";
import accessTokenSlice from "./slice/accessTokenSlice";

const store = configureStore({
  reducer: {
    loginuser: userReducer,
    signupuser: authSlice,
    myPage: myPageReducer,
    totalPrice: totalPriceReducer,
    animalCategories: animalCategorySlice,
    animalCategory: animalCategoryStateSlice,
    productCategory: productCategoryStateSlice,
    modalState: modalSlice,
    parameter: parameterSlice,
    listData: listSlice,
    sendCart: sendCardReducer,
    accessToken: accessTokenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
