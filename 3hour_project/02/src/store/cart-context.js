import React from "react";

const CartContext = React.createContext({
  items: [],
  inventoryItems: [],
  addInventoryItem: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
