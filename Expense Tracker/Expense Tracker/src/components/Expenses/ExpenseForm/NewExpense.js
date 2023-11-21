import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
import { Button } from "react-bootstrap";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={...enteredExpenseData, id: Math.random().toString(), date: new Date()}
    console.log(expenseData)
    props.onAdd(expenseData)
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <Button onClick={startEditingHandler}>Add Expense</Button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} addExpenseData = {saveExpenseDataHandler}/>}
    </div>
  );
};
export default NewExpense;
