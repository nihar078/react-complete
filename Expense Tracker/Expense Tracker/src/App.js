import React, { Fragment } from "react";
import AuthForm from "./components/Auth/AuthForm";
// import AuthContext from "./store/AuthContext";
// import Home from "./components/Layout/Home";
import Header from "./components/Layout/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import MainNavigation from "./components/Layout/MainNavigation";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ExpenseTracker from "./components/Expenses/ExpenseTracker";
import { useSelector } from "react-redux";
// import { themeActions } from "./store/themeSlice";
// import { Button } from "react-bootstrap";
import  "./App.css"
// import ExpenseTracker from "./components/Expenses/ExpenseTracker";

const App = () => {
  // const authCtx = useContext(AuthContext);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  // const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // const toggleThemeHandler = () => {
  //   dispatch(themeActions.toggleDarkMode());
  // };
  // console.log("isLoggedIn", authCtx.isLoggedIn);

  return (
    <Fragment>
      <div className={darkMode ? "dark" : "light"}>
        {/* <Button onClick={toggleThemeHandler} variant="info">
          Dark Mode
        </Button> */}
        <MainNavigation />
        {/* {!authCtx.isLoggedIn && <AuthForm />} */}
        {/* {authCtx.isLoggedIn && <Header />} */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <>
                {isLogin && (
                  <>
                    <Header />
                    <Navigate to="/expense" />
                  </>
                )}
                {!isLogin && <Navigate to="/auth" />}
              </>
            }
          />
          {/* <Route path="/home" element={<>{authCtx.isLoggedIn ? <Header /> : <Navigate to="/auth" />}</>} /> */}
          <Route path="/auth" element={<AuthForm />} />
          <Route path="*" element={<Navigate to="/" />} />
          {isLogin && (
            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <Profile />
                </>
              }
            />
          )}
          {isLogin && (
            <Route
              path="/expense"
              element={
                <>
                  <Header />
                  <ExpenseTracker />
                </>
              }
            />
          )}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
