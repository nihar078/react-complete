import React from "react";

const CartContext = React.createContext({
  items: [],
  insertItems: [],
  addInsertItem: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
