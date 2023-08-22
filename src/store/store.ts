import { configureStore } from "@reduxjs/toolkit";
import myPageReducer from './slice/myPageSlice';
import totalPriceReducer from './slice/totalPriceSlice';
import sendCardReducer from './slice/sendCartSlice';

const store = configureStore({
  reducer: {
    myPage: myPageReducer,
    totalPrice: totalPriceReducer,
    sendCart: sendCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;