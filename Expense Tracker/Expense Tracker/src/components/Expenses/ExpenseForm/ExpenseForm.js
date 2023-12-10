import React, { useState, useEffect } from "react";
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

useEffect(() => {
    if (props.editMode && props.editData) {
      // Set form fields with expense details if in edit mode and editData is defined
      setAmount(props.editData.amount);
      setDescription(props.editData.description);
      setCategory(props.editData.category);
    }
  }, [props.editMode, props.editData]);

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
        category: category,
        // Id: Math.random().toString(),
        date: new Date().toISOString(),
    }
    setAmount("")
    setCategory("")
    setDescription("")
    console.log(expenseData)
    // props.addExpenseData(expenseData)
    if (props.editMode) {
      // If in edit mode, call the editExpenseData function
      props.addEditExpenseData( expenseData);
    } else {
      // Otherwise, call the addExpenseData function
      props.addExpenseData(expenseData);
    }
  }


  return (
    <div>
      <h1>Expense</h1>
      {/* <h1>{props.editMode ? "Edit Expense" : "Add Expense"}</h1> */}
      <form onSubmit={expensesubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="amount">Amount: </label>
            <input type="number" id="amount" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" required  value={description} onChange={descriptionChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="category">Category:</label>
            <select id= "category" value={category} onChange={categoryChangeHandler}>
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
          {props.editMode ? (<Button type="submit" onClick={props.onCancel} variant="secondary" style={{marginRight: "4px"}}>
            Close
          </Button>):(<Button type="submit" onClick={props.onCancel} variant="secondary" style={{marginRight: "4px"}}>
            Cancel
          </Button>)}
          <Button variant="primary" type="submit">
            {/* Add Expense */}
            {props.editMode ? "Save Changes" : "Add Expense"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
