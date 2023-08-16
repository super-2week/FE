import { configureStore } from "@reduxjs/toolkit";
import myPageReducer from './slice/myPageSlice';
import totalPriceReucer from './slice/totalPriceSlice';

const store = configureStore({
  reducer: {
    myPage: myPageReducer,
    totalPrice: totalPriceReucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;