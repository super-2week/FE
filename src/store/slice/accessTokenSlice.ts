import { createSlice } from "@reduxjs/toolkit";

interface accessTokenState {
  accessToken: string | null;
}

const initialState: accessTokenState = {
  accessToken: null,
};

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload;
    },
    setRemoveAccessToken: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken, setRemoveAccessToken } =
  accessTokenSlice.actions;
export default accessTokenSlice.reducer;
