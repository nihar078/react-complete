import React from "react";

const CartContext = React.createContext({
  items: [],
  inventoryItems: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  addInventoryItem: (item) => {},
});

export default CartContext;
