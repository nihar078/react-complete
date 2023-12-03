import React from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
// import ExpenseContext from "../../store/ExpenseContext";

const Expenses = () => {
  // const expenseCtx = useContext(ExpenseContext)
  const expenseRdx = useSelector((state) => state.expense);
  //   console.log(expenseRdx.expenses);
  let totalAmount = 0;
  expenseRdx.expenses.forEach((expense) => {
    totalAmount += Number(expense.amount);
  });
  const formattedTotalAmount = totalAmount.toFixed(2);
  return (
    <div className="expense">
      <h4 style={{ textAlign: "center" }}>All Expenses</h4>
      <hr />
      <ExpenseList />
      <h5 style={{ textAlign: "right" }}>
        Total Amount Rs. {formattedTotalAmount}
      </h5>
      {totalAmount > 10000 && (
        <Button variant="warning">Activate Premium</Button>
      )}
    </div>
  );
};

export default Expenses;
