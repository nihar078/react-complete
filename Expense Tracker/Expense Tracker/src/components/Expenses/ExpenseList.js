import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseContext from "../../store/ExpenseContext";

const ExpenseList = () => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <div style={{ textAlign: "center" }}>
      <ul>
        {expenseCtx.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            category={expense.category}
            amount={expense.amount}
            description={expense.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
