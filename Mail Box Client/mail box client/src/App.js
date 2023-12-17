import React, { Fragment } from "react";
import AuthForm from "./components/Auth/AuthForm";
import MainNavigation from "./components/Layout/MainNavigation";
import Header from "./components/Layout/Header";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const authRdx = useSelector((state) => state.auth);
  // console.log(authRdx);

  return (
    <Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <>
              {authRdx.isLoggedIn && <Header />}
              {!authRdx.isLoggedIn && <Navigate to="/auth" />}
            </>
          }
        />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Header />
      <AuthForm /> */}
    </Fragment>
  );
}

export default App;
