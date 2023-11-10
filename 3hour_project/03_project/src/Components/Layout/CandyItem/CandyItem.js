import React from "react";

import ItemForm from "./ItemForm";
import classes from './CandyItem.module.css'
// import CartContext from "../../../store/cart-context";

const CandyItem = (props) => {
  
  return (
    <li className={classes.item}>
      <span>{props.name} </span>
      <span>{props.description}</span>
      <span>Rs {props.price}</span>
      {/* <span>{props.quantity <= 0 ? "Out Of Stock" : props.quantity}</span> */}
      {/* {console.log("inside item", props)} */}
      <ItemForm id={props.id} item={props} />
    </li>
  );
};


export default CandyItem