import ReactDOM from "react-dom/client";
// import { AuthContextProvider } from "./store/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/reduxIndex";

import "./index.css";
import App from "./App";

//React Bootstrap Configuration
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { ExpenseContextProvider } from "./store/ExpenseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthContextProvider>
  //   <BrowserRouter>
  //     <ExpenseContextProvider>
  //       <App />
  //     </ExpenseContextProvider>
  //   </BrowserRouter>
  // </AuthContextProvider>

  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
