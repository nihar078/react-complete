import React, { useState } from "react";
import CartContext from "./cart-context";
import { useEffect } from "react";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/4cf6eec5d57d4d80a5b2d79dac090115/cart`,
          { method: "GET" }
        );
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          updateItems(data);
        } else {
          console.error("Error fetching cart items");
        }
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };
  
    fetchCartItems();
  }, []); // Empty dependency array means this effect runs once after the initial render
  
  
  const addInventoryItemHandler = (item) => {
    setInventoryItems([...inventoryItems, item]);
  };

  const addItemToCartHandler = async (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex > -1) {
      const newCartItems = [...items];
      // const newInventoryItems = [...inventoryItems];
      // newInventoryItems[itemIndex].quantity -= item.quantity;
      // setInventoryItems([...newInventoryItems]);
      newCartItems[itemIndex].quantity += item.quantity;
      updateItems([...newCartItems]);
      try {
        const response = await fetch(
          `https://crudcrud.com/api/4cf6eec5d57d4d80a5b2d79dac090115/cart/${items[itemIndex]._id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              id: items[itemIndex].id,
              name: items[itemIndex].name,
              price: items[itemIndex].price,
              quantity: items[itemIndex].quantity,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        if(response.ok){
          console.log("Quantity updated succesfully")
        }
        else{
          console.error("Error updating quantity:", response.status, response.statusText)
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      updateItems([...items, item]);
      try {
        const response = await fetch(
          `https://crudcrud.com/api/4cf6eec5d57d4d80a5b2d79dac090115/cart`,
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("post", [...items, data]);
          updateItems([...items, data]);
        } else {
          throw new Error("Error saving cart item");
        }
      } catch (error) {
        console.log(error);
      }
    }
    // updateItems([...items, item])
    // console.log("inside addItemToHandler", cartContext);
  };

  const removeItemFromCartHandler = async(id) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex > -1) {
      const newCartItems = [...items];

      if (newCartItems[itemIndex].quantity === 1) {
        const deletedItemId = newCartItems[itemIndex]._id;
        try {
          const response = await fetch(`https://crudcrud.com/api/4cf6eec5d57d4d80a5b2d79dac090115/cart/${deletedItemId}`, {
            method: "DELETE"
          })
          if(response.ok){
            console.log("Item deleted successfully from the sever")
          }
          else{
            console.error("Error deleting item:", response.status, response.statusText)
          }
        } catch (error) {
          console.error(error)
        }
        newCartItems.splice(itemIndex, 1);
      } else {
        newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - 1;
        try {
          const response = await fetch(
            `https://crudcrud.com/api/4cf6eec5d57d4d80a5b2d79dac090115/cart/${items[itemIndex]._id}`,
            {
              method: "PUT",
              body: JSON.stringify({
                id: items[itemIndex].id,
                name: items[itemIndex].name,
                price: items[itemIndex].price,
                quantity: items[itemIndex].quantity,
              }),
              headers: { "Content-Type": "application/json" },
            }
          );
          if(response.ok){
            console.log("Quantity updated succesfully")
          }
          else{
            console.error("Error updating quantity:", response.status, response.statusText)
          }
        } catch (error) {
          console.error(error)
        }
      }
      updateItems(newCartItems);
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
