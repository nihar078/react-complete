import React, { Fragment, useContext } from "react";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/AuthContext";
import Home from "./components/Layout/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";

const App = () => {
  const authCtx = useContext(AuthContext);
  console.log("isLoggedIn", authCtx.isLoggedIn);

  return (
    <Fragment>
      <MainNavigation />
      {/* {!authCtx.isLoggedIn && <AuthForm />}
      {authCtx.isLoggedIn && <Home />} */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<>
          {authCtx.isLoggedIn && <Home />}
          {!authCtx.isLoggedIn && <Navigate to="/auth" />}
          </>}
        />
        <Route
          path="/auth"
          element={<AuthForm />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
