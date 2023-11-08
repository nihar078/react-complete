import React, { useState, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./AuthContex";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  // const [apiData, setApiData] = useState([]);

  const authCtx = useContext(AuthContext);
  // console.log(authCtx);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/334e6749cd794c9d94f00e823d89d543/cart${authCtx.email}`,
          { method: "GET" }
        );
        if (response.ok) {
          const data = await response.json();
          updateItems(data);
          // setApiData(data);
          console.log(data);
        } else {
          console.error("Error fetching cart items");
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (authCtx.isLoggedIn) {
      fetchCartItems();
    }
  }, [authCtx.isLoggedIn, authCtx.email]);

  const addItemToCartHandler = async (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex > -1) {
      const newCartItems = [...items];
      newCartItems[itemIndex].quantity++;
      updateItems([...newCartItems]);
      // storeinBackend([...newCartItems])
      console.log("put work...");
      try {
        const response = await fetch(
          `https://crudcrud.com/api/334e6749cd794c9d94f00e823d89d543/cart${authCtx.email}/${items[itemIndex]._id}`,
          {
            method: "PUT", // Use PUT to update quantity
            body: JSON.stringify({
              id: items[itemIndex].id,
              title: items[itemIndex].title,
              price: items[itemIndex].price,
              quantity: items[itemIndex].quantity,
              imageUrl: items[itemIndex].imageUrl,
              review: items[itemIndex].review,
            }),
            // body: JSON.stringify(items[itemIndex]),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response)
        // if(response.ok){
        //   const data = await response.json()
        //   // updateItems(data)
        //   console.log("add extra put",[...data] )
        // }
        if (response.ok) {
          console.log("Quantity updated successfully");
        } else {
          console.error("Error updating quantity:", response.status, response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      updateItems([...items, item]);
      console.log("post work");
      try {
        const response = await fetch(
          `https://crudcrud.com/api/334e6749cd794c9d94f00e823d89d543/cart${authCtx.email}`,
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          // localStorage.setItem("id", data._id)
          console.log("post....", [...items, data]);
          // setApiData([...items, data]);
          updateItems([...items, data])
        }

        if (!response.ok) {
          throw new Error("Error saving cart item");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeItemFromCartHandler = async (id) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex > -1) {
      const newCartItems = [...items];
      if (newCartItems[itemIndex].quantity === 1) {
        const deletedItemId = newCartItems[itemIndex]._id;

      // Delete the item from the server
      try {
        const response = await fetch(
          `https://crudcrud.com/api/334e6749cd794c9d94f00e823d89d543/cart${authCtx.email}/${deletedItemId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          console.log("Item deleted successfully from the server");
        } else {
          console.error("Error deleting item:", response.status, response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
        newCartItems.splice(itemIndex, 1);
      } else {
        newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - 1;
        try {
          const response = await fetch(
            `https://crudcrud.com/api/334e6749cd794c9d94f00e823d89d543/cart${authCtx.email}/${items[itemIndex]._id}`,
            {
              method: "PUT", // Use PUT to update quantity
              body: JSON.stringify({
                id: items[itemIndex].id,
                title: items[itemIndex].title,
                price: items[itemIndex].price,
                quantity: items[itemIndex].quantity,
                imageUrl: items[itemIndex].imageUrl,
                review: items[itemIndex].review,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            console.log("Quantity updated successfully");
          } else {
            console.error("Error updating quantity:", response.status, response.statusText);
          }
        } catch (error) {
          console.error(error);
        }
      }
      updateItems(newCartItems);
    }
    
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  // console.log(cartContext)
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
