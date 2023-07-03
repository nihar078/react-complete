import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-contex";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const removeItemHandler = (id) => {
    cartcntx.removeItem(id);
  };

  const addItemHandler = (id) => {
    cartcntx.addItem({ id, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onAdd={() => addItemHandler(item.id)}
          onRemove={() => removeItemHandler(item.id)}
          // item ={item}
        />
      ))}
    </ul>
  );

  let totalAmount = 0;
  cartcntx.items.forEach((item) => {
    totalAmount += item.quantity * item.price;
  });
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>${totalAmount.toFixed(2)}</div>
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
