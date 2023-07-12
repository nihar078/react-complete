import React, { useState, useContext } from "react";
import "./ProductForm.css";
import CartContext from "../../store/cart-context";

const ProductForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [medicineDesc, setMedicineDesc] = useState("");
  const [price, setPrice] = useState("");
  const [medicineName, setMedicineName] = useState("");


  const mediciDescHandler = (event) => {
    setMedicineDesc(event.target.value);
  };

  const priceHandler = (event) => {
    const parsedPrice = parseFloat(event.target.value);
    // setPrice(event.target.value);
    setPrice(parsedPrice)
  };

  const medicineNameHandler = (event) => {
    setMedicineName(event.target.value);
  };

  const productFormHandler = (event) => {
    event.preventDefault();
    const product = {
      id: Math.random(),
      name: medicineName,
      desc: medicineDesc,
      price: price
    };
    cartCtx.addInventoryItem(product);
  };

  return (
    <form onSubmit={productFormHandler}>
      <div className="input">
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
        <div className="button">
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
