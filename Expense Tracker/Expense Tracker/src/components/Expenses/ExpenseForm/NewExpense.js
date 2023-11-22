import React, { useContext, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { Button } from "react-bootstrap";
import ExpenseContext from "../../../store/ExpenseContext";

const NewExpense = () => {
  const expenseCtx = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      Id: Math.random().toString(),
      date: new Date(),
    };
    // props.onAdd(expenseData)
    expenseCtx.addExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <Button onClick={startEditingHandler}>Add Expense</Button>}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          addExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
