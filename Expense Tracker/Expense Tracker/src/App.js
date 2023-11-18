import React, { Fragment, useContext } from "react";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/AuthContext";
// import Home from "./components/Layout/Home";
import Header from "./components/Layout/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import MainNavigation from "./components/Layout/MainNavigation";

const App = () => {
  const authCtx = useContext(AuthContext);
  // console.log("isLoggedIn", authCtx.isLoggedIn);

  return (
    <Fragment>
      <MainNavigation />
      {/* {!authCtx.isLoggedIn && <AuthForm />} */}
      {/* {authCtx.isLoggedIn && <Header />} */}
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route
          path="/home"
          element={
            <>
              {authCtx.isLoggedIn && <Header />}
              {!authCtx.isLoggedIn && <Navigate to="/auth" />}
            </>
          }
        />
        {/* <Route path="/home" element={<>{authCtx.isLoggedIn ? <Header /> : <Navigate to="/auth" />}</>} /> */}
        <Route path="/auth" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
