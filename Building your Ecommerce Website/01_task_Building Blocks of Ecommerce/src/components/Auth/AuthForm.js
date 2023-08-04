import React, { useContext, useRef, useState } from "react";

import AuthContext from "../../store/AuthContex";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./AuthForm.css";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  // const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // const response = await fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAYVAohSypPUpS3t0CeHuOGG8-tb310A0",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: enteredEmail,
    //       password: enteredPassword,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // if(!response.ok){
    //   const data = await response.json()
    //   alert(data.error.message)
    // }
    // else{
    //   const data = await response.json()
    //   authCtx.login(data.idToken)
    //   navigate('/store')
    // }
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAYVAohSypPUpS3t0CeHuOGG8-tb310A0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAYVAohSypPUpS3t0CeHuOGG8-tb310A0";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data)
        authCtx.login(data.idToken);
        // localStorage.setItem("tokenId", data.idToken)
        navigate("/store");
        // history.replace("/store");
      } else {
        const data = await response.json();
        let errorMessage = "Authentication failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          throw new Error(errorMessage);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    // <h2>{isLogin ? "Login" : "Sign Up"}</h2>
    <Form onSubmit={submitHandler} className="auth">
      <Form.Group className="control" controlId="formGroupEmail">
        <Form.Label> Your Email </Form.Label>
        <Form.Control type="email" required ref={emailInputRef} />
      </Form.Group>
      <Form.Group className="control" controlId="formGroupPassword">
        <Form.Label> Your Password</Form.Label>
        <Form.Control type="password" required ref={passwordInputRef} />
      </Form.Group>
      <div className="actions">
        <Button type="submit">{isLogin ? "Login" : "Create Account"}</Button>
        <Button className="toggle" onClick={switchAuthModeHandler}>
          {isLogin ? "Create new account" : "Login with existing account"}
        </Button>
      </div>
    </Form>
  );
};

export default AuthForm;
