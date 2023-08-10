import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token) => {}, 
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  // const initialToken = localStorage.getItem("tokenData");
  // const initialToken = JSON.parse(localStorage.getItem("tokenData"))
  // const [token, setToken] = useState(initialToken.token);
  // const [email, setEmail] = useState(initialToken.email)
  const initialTokenData = localStorage.getItem("tokenData");
  // console.log("initialTokenData:", initialTokenData); // Add this line to check the value
  const initialToken = initialTokenData ? JSON.parse(initialTokenData) : { token: "", email: "" };
  const [token, setToken] = useState(initialToken.token);
  const [email, setEmail] = useState(initialToken.email);
  // console.log(initialToken)
  // console.log(AuthContext)
  const userIsLoggedIn = !!token;

  const loginHandler = (tokenData) => {
    console.log(tokenData)
    setToken(tokenData.token);
    setEmail(tokenData.email)
    localStorage.setItem("tokenData", JSON.stringify(tokenData));
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null)
    localStorage.removeItem("tokenData");
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
