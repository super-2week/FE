import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface totalPriceType {
  count: number;
}

const initialState: totalPriceType = {
  count: 1,

};

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: initialState,
  reducers: {
    setPlus: (state: totalPriceType, action: PayloadAction<number>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정가능.
      state.count += action.payload;
    },
    setMinus: (state: totalPriceType, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { setPlus } = totalPriceSlice.actions;
export const { setMinus } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;
