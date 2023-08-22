import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface MyPageState {
  activeTab: string;
};

const initialState  = {
  activeTab: 'userInfo'
}as MyPageState;

const myPaceSlice = createSlice({
  name: 'myPage',
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = myPaceSlice.actions;
export const selectMyPage = (state: RootState) => state.myPage.activeTab;

export default myPaceSlice.reducer;