import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./store/AuthContext";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

//React Bootstrap Configuration
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
