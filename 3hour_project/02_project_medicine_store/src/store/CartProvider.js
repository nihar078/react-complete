import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const [inventoryItems, setInventoryItems] = useState([]);

  const addInventoryItemHandler = (item) => {
    setInventoryItems([...inventoryItems, item]);
  };

  const addItemToCartHandler = (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex > -1) {
      const newCartItems = [...items];
      // const newInventoryItems = [...inventoryItems];
      // newInventoryItems[itemIndex].quantity -= item.quantity;
      // setInventoryItems([...newInventoryItems]);
      newCartItems[itemIndex].quantity += item.quantity;
      updateItems([...newCartItems]);
    } else {
      updateItems([...items, item]);
    }
    // updateItems([...items, item])
    // console.log("inside addItemToHandler", cartContext);

    // reduce the inventory item quantity
    const inventoryItemIndex = inventoryItems.findIndex(
      (inventoryItem) => inventoryItem.id === item.id
    );

    if (inventoryItemIndex > -1) {
      const updatedInventoryItems = [...inventoryItems];
      updatedInventoryItems[inventoryItemIndex].quantity -= item.quantity;
      setInventoryItems(updatedInventoryItems);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex > -1) {
      const newCartItems = [...items];

      if (newCartItems[itemIndex].quantity === 1) {
        newCartItems.splice(itemIndex, 1);
      } else {
        newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - 1;
      }
      updateItems(newCartItems);
    }

    const inventoryItemIndex = inventoryItems.findIndex(
      (inventoryItem) => inventoryItem.id === id
    );

    if (inventoryItemIndex > -1) {
      const updatedInventoryItems = [...inventoryItems];
      updatedInventoryItems[inventoryItemIndex].quantity += 1;
      setInventoryItems(updatedInventoryItems);
    }
  };

  const cartContext = {
    inventoryItems: inventoryItems,
    addInventoryItem: addInventoryItemHandler,
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
