
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    userName: string | null;
    phoneNumber: string | null;
    email: string | null;
    password: string | null;
    address:string | null;
    detailAddress: string | null;
}

const initialState: AuthState = {
  userName: null,
  phoneNumber:  null,
  email:null,
  password: null,
  address: null,
  detailAddress: null,
};

const authSlice = createSlice({
  name: 'signupuser',
  initialState,
  reducers: {
    successSignUp: (state, action: PayloadAction<AuthState>) => {
      const {userName,phoneNumber,email,password,address,detailAddress} = action.payload;
    state.userName = userName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.password = password;
      state.address = address;
      state.detailAddress = detailAddress;
    },
  },
});

export const {successSignUp} = authSlice.actions;

export default authSlice.reducer;