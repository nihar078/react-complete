import ExpenseDate from "./ExpenseDate";
import ExpenseDeatails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDeatails
        amount={props.amount}
        locationOFExpenditure={props.locationOFExpenditure}
        title={props.title}
      />
    </div>
  );
}
export default ExpenseItem;
