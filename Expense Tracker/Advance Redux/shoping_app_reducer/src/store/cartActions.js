import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://react-redux-shopping-car-706bf-default-rtdb.firebaseio.com/cart.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      //   console.log(data)
      return data;
    };
    try {
      const cartData = await fetchData();
    //   console.log(cartData);
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          isItemsChanged: cartData.isItemsChanged
        }) 
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://react-redux-shopping-car-706bf-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items , isItemsChanged: cart.isItemsChanged}),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    //   const data2 = await response.json();
    //   console.log(data2);
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
