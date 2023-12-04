import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = { expenses: [], isPremiumActivated: false };

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    setExpense(state, action) {
      state.expenses = action.payload;
    },
    addExpense(state, action) {
      // console.log("add expense",action.payload.id)
      // state.expenses = state.expenses.push(action.payload);
      state.expenses = [...state.expenses, action.payload];
    },
    removeExpense(state, action) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    editExpense(state, action) {
      // console.log(action.payload.id)
      // console.log(action.payload.updatedExpense)
      // console.log(action.payload)
      // const index = state.expenses.findIndex((expense) => expense.id === action.payload.id)
      // if(index !== -1){
      //   state.expenses[index] = {...state.expenses[index], ...action.payload.updatedExpense}
      // }
      //or
      state.expenses = state.expenses.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.updatedExpense }
          : expense
      );
    },
    activatePremium(state, action) {
      // console.log(action.payload)
      // state.isPremiumActivated = action.payload   ///if use action on argumrnt then use it 
      state.isPremiumActivated = !state.isPremiumActivated;
    },
  },
});

// // Async Thunk Action to fetch expenses from the server
// export const fetchExpenses = () => async (dispatch, getState) => {
//   const authRdx = getState().auth;
//   const userEmail = authRdx.email ? authRdx.email.replace(/[@.]/g, "") : "";

//   try {
//     const response = await fetch(
//       `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}.json`
//     );

//     if (response.ok) {
//       const data = await response.json();

//       const expenseData = [];
//       for (const key in data) {
//         expenseData.push({
//           id: key,
//           ...data[key],
//         });
//       }

//       dispatch(expenseSlice.actions.setExpense(expenseData));
//     } else {
//       console.error("Error fetching Data");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Async Thunk Action to add an expense to the server and update the Redux state
// export const addExpenseAsync = (expense) => async (dispatch, getState) => {
//   const authRdx = getState().auth;
//   const userEmail = authRdx.email ? authRdx.email.replace(/[@.]/g, "") : "";

//   try {
//     const response = await fetch(
//       `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}.json`,
//       {
//         method: "POST",
//         body: JSON.stringify(expense),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       const createExpense = { id: data.name, ...expense };

//       dispatch(expenseSlice.actions.addExpense(createExpense));
//     }
//   } catch (error) {
//     console.error("Error adding data");
//   }
// };

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
