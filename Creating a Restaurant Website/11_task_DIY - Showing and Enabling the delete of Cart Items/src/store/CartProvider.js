import { useState } from "react";
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  //   let items = [];
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    // cartContext.items.push(item);
    // items.push(item);
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex > -1) {
      const newCartItems = [...items];
      newCartItems[itemIndex].quantity += item.quantity
      updateItems([...newCartItems]);
    } else {
      updateItems([...items, item]);
    }
    // console.log("inside addItemToHandler", cartContext);
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
    // message: "Click here",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log("Inside CartContext.Provider", cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
