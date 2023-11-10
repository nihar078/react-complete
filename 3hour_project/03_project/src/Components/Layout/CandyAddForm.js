import React, { useContext, useState } from "react";

import classes from "./CandyAddForm.module.css";
import CartContext from "../../store/cart-context";
const CandyAddForm = () => {
  const cartCtx =  useContext(CartContext)
  const [candyName, setCandyName] = useState("");
  const [candyDesc, setCandyDesc] = useState("");
  const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("")

  const candyNameHandler = (event) => {
    setCandyName(event.target.value);
  };
  const candyDescHandler = (event) => {
    setCandyDesc(event.target.value);
  };

  const priceHandler = (event) => {
    const parsedPrice = parseFloat(event.target.value);
    // setPrice(event.target.value);
    setPrice(parsedPrice);
  };

  // const quantityHandler = (event) => {
  //   const quantityAvailabel = Number(event.target.value)
  //   setQuantity(quantityAvailabel)
  // }

  const CandyFormHandler = (event) => {
    event.preventDefault();
    const candy = {
      id: Math.random(),
      name: candyName,
      desc: candyDesc,
      price: price,
      // quantity: quantity
    };
    cartCtx.addInventoryItem(candy)
    setCandyDesc("")
    setCandyName("")
    setPrice("")
  };

  return (
    <form onSubmit={CandyFormHandler}>
      <div className={classes.input}>
        <div>
          <label>Candy Name:</label>
          <input
            type="text"
            value={candyName}
            onChange={candyNameHandler}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={candyDesc}
            onChange={candyDescHandler}
          ></input>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={priceHandler}></input>
        </div>
        <div className={classes.button}>
          <button type="submit">Add Candy</button>
        </div>
      </div>
    </form>
  );
};

export default CandyAddForm;
