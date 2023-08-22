import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface sendCartType {
  productId: number | null;
  quantity: number | null;
}

const initialState: sendCartType = {
  productId: null,
  quantity: null,
};

const sendCartSlice = createSlice({
  name: "sendCart",
  initialState: initialState,
  reducers: {
    cartProductId: (state, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
    cartQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
      console.log(action.payload);
    },
  },
});

export const { cartProductId, cartQuantity } = sendCartSlice.actions;

export default sendCartSlice.reducer;
