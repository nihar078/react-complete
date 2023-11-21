import React from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css"


const Expenses = (props)=>{
    let totalAmount = 0 
    props.items.forEach((expense) => {
        totalAmount += Number(expense.amount)
    })
    return(
        <div className="expense">
            <h4 style={{textAlign: "center"}}>All Expenses</h4>
            <ExpenseList lists = {props.items}/>
            <h5 style={{textAlign: "right"}}>Total Amount Rs. {totalAmount}</h5>
        </div>
    )
}

export default Expenses