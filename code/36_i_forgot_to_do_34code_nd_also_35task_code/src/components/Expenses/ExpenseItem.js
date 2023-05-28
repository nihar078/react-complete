// import React, { useState } from "react";
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
   
  // const [title, setTitle] = useState(props.title)
  // const [amount, setAmount] = useState(props.amount)
  // console.log("ExpenseItem evaluated by React")

  // function clickHandler(){
  //   setTitle('Updated!');
  //   console.log(title);
  // }
  // const updateAmount = () =>{
  //   setAmount(100);
  //   console.log(amount)
  // }

  return (
    <Card className="expense-item"> 
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{props.locationOFExpenditure}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button>
      <button onClick = {updateAmount}>Change Expense</button> */}
    </Card>
  );
}
export default ExpenseItem;
