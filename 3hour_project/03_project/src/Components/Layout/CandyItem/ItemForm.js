import React, { useContext } from "react";

import classes from "./ItemForm.module.css";
import CartContext from "../../../store/cart-context";

const ItemForm = (props) => {
  const cartCntx = useContext(CartContext);
  const addItemToCartOne = (event) => {
    event.preventDefault();
    cartCntx.addItem({ ...props.item, quantity: +1 });
  };

  const addItemToCartTwo = (event) => {
    event.preventDefault();
    cartCntx.addItem({ ...props.item, quantity: +2 });
  };
  const addItemToCartThree = (event) => {
    event.preventDefault();
    cartCntx.addItem({ ...props.item, quantity: +3 });
  };

  return (
    <form className={classes.item}>
      <button onClick={addItemToCartOne}>
        + Add 1
      </button>
      <button onClick={addItemToCartTwo}>
        + Add 2
      </button>
      <button onClick={addItemToCartThree}>
        + Add 3
      </button>
    </form>
  );
};

export default ItemForm;
