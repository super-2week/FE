import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartList {
  cartId: number | null;
  imageUrl: string;
  price: number | null;
  productId: number | null;
  productName: string;
  quantity: number | null;
  total: number | null;
}

const initialState: CartList[] = [];

const cartListSlice = createSlice({
  name: "cartListSlice",
  initialState,
  reducers: {
    setCartList: (
      state: CartList[],
      action: PayloadAction<CartList[]>
    ) => {
      console.log(action.payload);
      state = action.payload;
      console.log('state',state);
    },
  },
});

export const { setCartList } = cartListSlice.actions;
export default cartListSlice.reducer;
