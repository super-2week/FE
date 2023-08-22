import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  open: boolean;
}

const initialState: ModalState = {
  open: false,
};

const modalStateSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    setModalOpen: (state: ModalState, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setModalOpen } = modalStateSlice.actions;

export default modalStateSlice.reducer;
