import React, { useState } from "react";
import NewExpense from "./ExpenseForm/NewExpense";
import Expenses from "./Expenses";


const ExpenseTracker = () =>{
    const [expenses, setExpenses] = useState([])
    const addExpenseHandler = expense =>{
        setExpenses((prevExpenses) =>{
            return[expense, ...prevExpenses]
        })
    }
    console.log(expenses)

    return(
        <div>
            {/* <h1 style={{textAlign: "center"}}>Expense Tracker</h1> */}
            <NewExpense onAdd={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    )
}

export default ExpenseTracker