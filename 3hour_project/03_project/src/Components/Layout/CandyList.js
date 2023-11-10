import React, { useContext } from "react";
import classes from "./CandyList.module.css";
import CartContext from "../../store/cart-context";
import CandyItem from "./CandyItem/CandyItem";

const CandyList = () => {
  const cartCntx = useContext(CartContext);

  const candiesList = cartCntx.inventoryItems.map((item) => (
    <CandyItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.desc}
      price={item.price}
    />
  ));

  return (
    <div className={classes.items}>
      <h2>Candy</h2>
      <div className={classes.list}>
        <h3>Name</h3>
        <h3>Description</h3>
        <h3>Price</h3>
      </div>
      <ul>{candiesList}</ul>
    </div>
  );
};

export default CandyList;
