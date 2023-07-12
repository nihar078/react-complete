import React, { useContext } from "react";
import classes from "./MedicineList.module.css";
import CartContext from "../../store/cart-context";
import MedicineItem from "./MedicineItem/MedicineItem";

const MedicineList = () => {
  const cartCntx = useContext(CartContext);

  const medicinesList = cartCntx.inventoryItems.map((item) => (
    <MedicineItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.desc}
      price={item.price}
      quantity ={item.quantity}
    />
  ));

  return (
    <div className={classes.items}>
      <h2>Medicines</h2>
      <div className={classes.list}>
        <h3>Name</h3>
        <h3>Description</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
      </div>
      <ul>{medicinesList}</ul>
    </div>
  );
};

export default MedicineList;
