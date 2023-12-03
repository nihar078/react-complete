import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSl";
import expenseReducer from "./expenseSl";

const store = configureStore({
  reducer: { auth: authReducer, expense: expenseReducer },
});

export default store;
