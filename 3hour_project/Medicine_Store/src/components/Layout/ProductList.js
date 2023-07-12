import React from "react";
import "./ProductList.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MedicineItem from "./MedicineItem/MedicineItem";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const MedicineList = cartCtx.inventoryItems.map((item) => (
    <MedicineItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.desc}
      price={item.price}
    />
  ));

  return (
    <div className="items">
      <h2>Medicines</h2>
      <div className="list">
        <h3>Name</h3>
        <h3>Description</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
      </div>
      <ul>{MedicineList}</ul>
    </div>
  );
};

export default ProductList;
