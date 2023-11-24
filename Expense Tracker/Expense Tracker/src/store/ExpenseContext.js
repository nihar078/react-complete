import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
  editExpense: (id, updatedExpense) => {},
});

export const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);
  const authCtx = useContext(AuthContext);

  //   const userEmail = authCtx.email.replace(/[@.]/g, "");
  //   console.log(userEmail);
  const userEmail = authCtx.email ? authCtx.email.replace(/[@.]/g, "") : "";
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(
          `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}.json`
        );
        if (response.ok) {
          const data = await response.json();
        //   console.log(data);

            const expenseData = [];
            for (const key in data) {
              expenseData.push({
                id: key,
                ...data[key],
              });
            }
            // console.log(expenseData)
            setExpenses(expenseData);
        } else {
          console.error("Error fetching Data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (authCtx.isLoggedIn) {
      fetchExpenses();
    }
  }, [authCtx.isLoggedIn, userEmail]);

  const addToExpenseHandler = async (expense) => {
    try {
      const response = await fetch(
        `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}.json`,
        {
          method: "POST",
          body: JSON.stringify(expense),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const createExpense = { id: data.name, ...expense };
        // console.log(createExpense)
        setExpenses([...expenses, createExpense]);
        // setExpenses((prevExpenses) => [...prevExpenses, createExpense])
      }
    } catch (error) {
        console.error("Error adding data")
    }
    // setExpenses(expense);
  };

  const removeExpenseHandler = async(id) =>{
    const response = await fetch(`https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}/${id}.json`, {
        method: "DELETE"
    })
    if(response.ok){
        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
        console.log("Expense Delete Succesfully from the server")
    }
    else{
        console.error("something went wrong in delete")
    }
  }
  const editExpenseHandler = async (id, updatedExpense) => {
    try {
      const response = await fetch(
        `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}/${id}.json`,
        {
          method: "PUT", // Use PUT/PATCH method for updating existing data
          body: JSON.stringify(updatedExpense),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Expense updated successfully on the server");
        setExpenses((prevExpenses) =>
        prevExpenses.map((expense) => (expense.id === id ? { ...expense, ...updatedExpense } : expense))
      );
      } else {
        console.error("Error updating expense on the server");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const expenseContextValue = {
    expenses: expenses,
    addExpense: addToExpenseHandler,
    removeExpense: removeExpenseHandler,
    editExpense: editExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseContextValue}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
