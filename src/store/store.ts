import { configureStore } from "@reduxjs/toolkit";
import myPageReducer from './slice/myPageSlice';

const store = configureStore({
  reducer: {
    myPage: myPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;