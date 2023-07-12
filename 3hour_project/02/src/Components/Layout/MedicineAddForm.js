import React, { useContext, useState } from "react";

import classes from "./MedicineAddForm.module.css";
import CartContext from "../../store/cart-context";
const MedicineAddForm = () => {
  const cartCtx =  useContext(CartContext)
  const [medicineName, setMedicineName] = useState("");
  const [medicineDesc, setMedicineDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("")

  const medicineNameHandler = (event) => {
    setMedicineName(event.target.value);
  };
  const mediciDescHandler = (event) => {
    setMedicineDesc(event.target.value);
  };

  const priceHandler = (event) => {
    const parsedPrice = parseFloat(event.target.value);
    // setPrice(event.target.value);
    setPrice(parsedPrice);
  };

  const quantityHandler = (event) => {
    const quantityAvailabel = Number(event.target.value)
    setQuantity(quantityAvailabel)
  }

  const MedicineFormHandler = (event) => {
    event.preventDefault();
    const medicine = {
      id: Math.random(),
      name: medicineName,
      desc: medicineDesc,
      price: price,
      quantity: quantity
    };
    cartCtx.addInventoryItem(medicine)
    setMedicineDesc("")
    setMedicineName("")
    setPrice("")
    setQuantity("")
  };

  return (
    <form onSubmit={MedicineFormHandler}>
      <div className={classes.input}>
        <div>
          <label>Medicine Name:</label>
          <input
            type="text"
            value={medicineName}
            onChange={medicineNameHandler}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={medicineDesc}
            onChange={mediciDescHandler}
          ></input>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={priceHandler}></input>
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={quantityHandler}></input>
        </div>
        <div className={classes.button}>
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
};

export default MedicineAddForm;
