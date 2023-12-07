import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartIsOpen: false, items: [], isItemsChanged: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    cartOpenToggle(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
    replaceCart(state, action){
      state.items = action.payload.items
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.isItemsChanged = true
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.isItemsChanged = true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
