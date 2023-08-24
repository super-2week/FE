import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email:string | null;
  password:string | null;
  username: string | null;
  profileImage: string | null;
  thumbnailImage: string | null;
}

const initialState: UserState = {
  email: null,
  password:null,
  username: null,
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
    successSocialLogin: (state, action: PayloadAction<{ email: string; username:string; profileImage: string;thumbnailImage: string;}>) => {
      const {email,username,profileImage,thumbnailImage} = action.payload;
      state.email = email;
      state.username = username;
      state.profileImage = profileImage;
      state.thumbnailImage = thumbnailImage;
    },
  },
});

export const { login, successSocialLogin } = userSlice.actions;
export default userSlice.reducer;
