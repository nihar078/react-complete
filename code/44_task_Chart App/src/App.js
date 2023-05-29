import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Pen & Notebook",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOFExpenditure: "Study",
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 12),
    locationOFExpenditure: "Travel",
  },
  {
    id: "e3",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2021, 2, 28),
    locationOFExpenditure: "Entertainment",
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOFExpenditure: "Furniture",
  },
];
const App = () => {
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   // React.createElement("h2", {}, "Expense Items"),
  //   React.createElement(NewExpense),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      {/* <h2>Expense Items</h2> */}
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
