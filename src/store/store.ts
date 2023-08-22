import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slice/userSlice';
import authSlice from '../store/slice/authSlice';

const store = configureStore({
  reducer: {
    loginuser: userReducer,
    signupuser: authSlice,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
