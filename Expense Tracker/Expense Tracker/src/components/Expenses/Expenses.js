import React, { useContext } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css"
import ExpenseContext from "../../store/ExpenseContext";


const Expenses = ()=>{
    const expenseCtx = useContext(ExpenseContext)
    let totalAmount = 0 
    expenseCtx.expenses.forEach((expense) => {
        totalAmount += Number(expense.amount)
    })
    const formattedTotalAmount = totalAmount.toFixed(2)
    return(
        <div className="expense">
            <h4 style={{textAlign: "center"}}>All Expenses</h4>
            <ExpenseList />
            <h5 style={{textAlign: "right"}}>Total Amount Rs. {formattedTotalAmount}</h5>
        </div>
    )
}

export default Expenses