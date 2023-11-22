import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
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
      }
    } catch (error) {
        console.error("Error adding data")
    }
    // setExpenses(expense);
  };
  const expenseContextValue = {
    expenses: expenses,
    addExpense: addToExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseContextValue}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
