import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-contex";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>35.62</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-cls"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );

  //   return React.createElement(
  //     Modal,
  //     {onClose : props.onClose},
  //     cartItems,
  //     React.createElement(
  //       "div",
  //       { className: classes.total },
  //       React.createElement("div", {}, "Total Amount"),
  //       React.createElement("div", {}, "35.62")
  //     ),
  //     React.createElement(
  //       "div",
  //       { className: classes.actions },
  //       React.createElement(
  //         "button",
  //         { className: classes["button-cls"] , onClick: props.onClose},
  //         "Close"
  //       ),
  //       React.createElement("button", { className: classes.button }, "Order")
  //     )
  //   );
};

export default Cart;
