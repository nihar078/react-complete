import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartIsOpen: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    cartOpenToggle(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
