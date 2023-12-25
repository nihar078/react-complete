import React, { Fragment } from "react";
import AuthForm from "./components/Auth/AuthForm";
import MainNavigation from "./components/Layout/MainNavigation";
import Header from "./components/Layout/Header";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ComposeEmail from "./components/Mail/Compose";
import Inbox from "./components/Mail/Inbox";
import SentBox from "./components/Mail/SentBox";

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
              {authRdx.isLoggedIn && (
                <>
                  <Header />
                  {/* <Navigate to="/inbox" /> */}
                  <Inbox />
                </>
              )}
              {!authRdx.isLoggedIn && <Navigate to="/auth" />}
            </>
          }
        />
        <Route path="/auth" element={<AuthForm />} />
        {/* {authRdx.isLoggedIn && (
          <Route
            path="/compose"
            element={
              <>
                <Header />
                <ComposeEmail />
              </>
            }
          />
        )} */}
        {authRdx.isLoggedIn && <Route
          path="/inbox"
          element={
            <Navigate to="/home"/>
            // <>
            //   <Header />
            //   <Inbox />
            // </>
          }
        />}
        {/* <Route
          path="/compose"
          element={
            authRdx.isLoggedIn && (
              <>
                <Header />
                <ComposeEmail />
              </>
            )
          }
        /> */}
        <Route path="/compose" element={<ComposeEmail />} />
        <Route path="/sent" element={<SentBox />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Header />
      <AuthForm /> */}
    </Fragment>
  );
}

export default App;
