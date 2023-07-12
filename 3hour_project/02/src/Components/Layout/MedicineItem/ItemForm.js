import React, { useContext } from "react";

import Input from "../../UI/Input";
import classes from "./ItemForm.module.css";
import CartContext from "../../../store/cart-context";

const ItemForm = (props) => {
  const cartCntx = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount").value;
    cartCntx.addItem({ ...props.item, quantity: +quantity });
  };

  return (
    <form className={classes.item}>
      <Input
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button
        onClick={addItemToCart}
        disabled={props.isOutOfStock}
      >
        {" "}
        + Add
      </button>
    </form>
  );
};

export default ItemForm;
