import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email:string | null;
  password:string | null;
  userName: string | null;
  profileImage: string | null;
  thumbnailImage: string | null;
}

const initialState: UserState = {
  email: null,
  password:null,
  userName: null,
  profileImage: null,
  thumbnailImage: null,
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    successSocialLogin: (state, action: PayloadAction<{ email: string; userName:string; profileImage: string;thumbnailImage: string;}>) => {
      const {email,userName,profileImage,thumbnailImage} = action.payload;
      state.email = email;
      state.userName = userName;
      state.profileImage = profileImage;
      state.thumbnailImage = thumbnailImage;
    },
  },
});

export const { login, successSocialLogin } = userSlice.actions;
export default userSlice.reducer;
