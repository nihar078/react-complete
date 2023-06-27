import React from "react";
import CartContext from "./cart-contex";
import { useState } from "react";

const CartProvider = (props) => {
  //   let items = [];
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    // cartContext.items.push(item);
    // items.push(item);
    updateItems([...items, item])
    console.log("inside addItemToHandler", cartContext);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    // message: "Click here",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {console.log("Inside CartContext.Provider", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
