import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  function clickHandler(){
    console.log("Clicked!!")
  }
  //or
  // const clickHandler = () =>{
  //   console.log("Clicked!!!!")
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{props.locationOFExpenditure}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick = {() => {console.log("Cliked!")}}>Change Title</button> */}
      {/* or */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
