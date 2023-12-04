import React from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { expenseActions } from "../../store/expenseSl";
import CSVFile from "./CSVFile";
// import ExpenseContext from "../../store/ExpenseContext";

const Expenses = () => {
  const dispatch = useDispatch();
  // const expenseCtx = useContext(ExpenseContext)
  const expenseRdx = useSelector((state) => state.expense);
  //   console.log(expenseRdx.expenses);
  let totalAmount = 0;
  expenseRdx.expenses.forEach((expense) => {
    totalAmount += Number(expense.amount);
  });
  const formattedTotalAmount = totalAmount.toFixed(2);

  // useEffect(() => {
  //   if (totalAmount >= 10000) {
  //     dispatch(expenseActions.activatePremium(true));
  //   } else {
  //     dispatch(expenseActions.activatePremium(false));
  //   }
  // }, [totalAmount, dispatch]);

  const handleActivatePremium = () => {
    dispatch(expenseActions.activatePremium());
    // dispatch(expenseActions.activatePremium(true));
  };
  return (
    <div className="expense">
      <h4 style={{ textAlign: "center" }}>All Expenses</h4>
      <hr />
      <ExpenseList />
      <h5 style={{ textAlign: "right" }}>
        Total Amount Rs. {formattedTotalAmount}
      </h5>
      {expenseRdx.isPremiumActivated && <CSVFile />}
      {totalAmount >= 10000 && (
        <Button variant="warning" onClick={handleActivatePremium}>
          Activate Premium
        </Button>
      )}
    </div>
  );
};

export default Expenses;
