import React from "react";

import ItemForm from "./ItemForm";
import classes from './MedicineItem.module.css'

const MedicineItem = (props) => {
  return (
    <li className={classes.item}>
      <span>{props.name} </span>
      <span>{props.description}</span>
      <span>Rs {props.price}</span>
      {/* {console.log("inside item", props)} */}
      <ItemForm id={props.id} item={props} />
    </li>
  );
};


export default MedicineItem