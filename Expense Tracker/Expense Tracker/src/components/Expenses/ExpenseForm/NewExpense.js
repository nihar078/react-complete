import React, {  useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../../store/expenseSl";
// import ExpenseContext from "../../../store/ExpenseContext";

const NewExpense = () => {
  // const expenseCtx = useContext(ExpenseContext);
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const authRdx = useSelector((state) => state.auth)
const userEmail = authRdx.email ? authRdx.email.replace(/[@.]/g, "") : ""

  const saveExpenseDataHandler = async(enteredExpenseData) => {
    // const expenseData = {
    //   ...enteredExpenseData,
    //   // Id: Math.random().toString(),
    //   date: new Date(),
    // };
    // props.onAdd(expenseData)
    // expenseCtx.addExpense(expenseData)
    // expenseCtx.addExpense(enteredExpenseData);

    //
    try {
      const response = await fetch(
        `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}.json`,
        {
          method: "POST",
          body: JSON.stringify(enteredExpenseData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const createExpense = { id: data.name, ...enteredExpenseData };
        console.log(createExpense)
        dispatch(expenseActions.addExpense(createExpense));
        // setExpenses((prevExpenses) => [...prevExpenses, createExpense])
      }
    } catch (error) {
        console.error("Error adding data")
    }
    // dispatch(expenseActions.addExpense(enteredExpenseData))
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
