import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
//   const[isExpense , setIsExpense] = useState(true);
  const [amount , setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState ("")

//   const switchAuthModeHandler = () => {
//     setIsExpense((prevState) => !prevState);
//   };

  const amountChangeHandler = (event) =>{
    setAmount(event.target.value)
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
  }

  function categoryChangeHandler(event){
    setCategory(event.target.value)
  }

  const expensesubmitHandler = (event) =>{
    event.preventDefault()

    const expenseData = {
        amount: amount,
        description: description,
        category: category
    }
    setAmount("")
    setCategory("")
    setDescription("")
    // console.log(expenseData)
    props.addExpenseData(expenseData)
  }


  return (
    <div>
      <h1>Expense</h1>
      <form onSubmit={expensesubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Amount: </label>
            <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Description</label>
            <input type="text" required  value={description} onChange={descriptionChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <select value={category} onChange={categoryChangeHandler}>
              <option value="" disabled hidden>
                Expense Category
              </option>
              <option value="Food">Food</option>
              <option value="Petrol">Petrol</option>
              <option value="Clothing">Clothing</option>
              <option value="Other">Other</option>
              <option value="Salary">Salary</option>
            </select>
          </div>
        </div>
        <div style={{ textAlign: "right"}}>
          <Button type="submit" onClick={props.onCancel} variant="secondary" style={{marginRight: "4px"}}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Expense
          </Button>
        </div>
        {/* <Button variant="outline-info" onClick={switchAuthModeHandler}>{isExpense ? "Switch to Income" : "Switch to Expense"}</Button> */}
      </form>
    </div>
  );
};

export default ExpenseForm;
