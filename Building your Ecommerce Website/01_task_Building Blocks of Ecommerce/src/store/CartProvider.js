import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex > -1) {
      const newCartItems = [...items];
      newCartItems[itemIndex].quantity++ ;
      updateItems([...newCartItems]);
    } else {
      updateItems([...items, item]);
    }
  };
  const removeItemFromCartHandler = (id) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id);
    if(itemIndex > -1){
      const newCartItems = [...items]
      if(newCartItems[itemIndex].quantity === 1){
        newCartItems.splice(itemIndex, 1)
      }
      else{
        newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - 1
      }
      updateItems(newCartItems)
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
