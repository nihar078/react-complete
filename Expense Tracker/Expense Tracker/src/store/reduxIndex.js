import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSl";
import expenseReducer from "./expenseSl";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: { auth: authReducer, expense: expenseReducer, theme: themeReducer },
});

export default store;
