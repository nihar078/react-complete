import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

    // return (
    //   <Modal>
    //     {cartItems}
    //     <div className={classes.total}>
    //       <div>Total Amount</div>
    //       <div>35.62</div>
    //     </div>
    //     <div className={classes.actions}>
    //       <button className={classes["button-cls"]}>Close</button>
    //       <button className={classes.button}>Order</button>
    //     </div>
    //   </Modal>
    // );

  return React.createElement(
    Modal,
    {},
    cartItems,
    React.createElement(
      "div",
      { className: classes.total },
      React.createElement("div", {}, "Total Amount"),
      React.createElement("div", {}, "35.62")
    ),
    React.createElement(
      "div",
      { className: classes.actions },
      React.createElement(
        "button",
        { className: classes["button-cls"] },
        "Close"
      ),
      React.createElement("button", { className: classes.button }, "Order")
    )
  );
};

export default Cart;
