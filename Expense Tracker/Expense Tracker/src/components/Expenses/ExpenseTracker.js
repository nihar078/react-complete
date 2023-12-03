import React from "react";
import NewExpense from "./ExpenseForm/NewExpense";
import Expenses from "./Expenses";


const ExpenseTracker = () => {
  return (
    <div>
      {/* <h1 style={{textAlign: "center"}}>Expense Tracker</h1> */}
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default ExpenseTracker;