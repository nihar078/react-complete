import React from "react";
import ExpenseItem from "./ExpenseItem";


const ExpenseList = (props) =>{
    return(
        <div style={{textAlign: "center"}}>
            <ul>
                {props.lists.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                    category={expense.category}
                    amount = {expense.amount}
                    description = {expense.description}
                    date = {expense.date}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList