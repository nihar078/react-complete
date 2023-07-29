import React, { useContext, useRef } from "react";

import "./AuthForm.css";
import AuthContext from "../../store/AuthContex";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHg6vgjgzisDZjhMANNHc0VSWPS-qF2cM",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if(!response.ok){
      const data = await response.json()
      alert(data.error.message)
    }
    else{
      const data = await response.json()
      authCtx.login(data.idToken)
      navigate('/store')
    }
  };

  return (
    <Form onSubmit={submitHandler} className="auth">
      <h2>Login</h2>
      <Form.Group className="control" controlId="formGroupEmail">
        <Form.Label> Your Email </Form.Label>
        <Form.Control type="email" required ref={emailInputRef} />
      </Form.Group>
      <Form.Group className="control" controlId="formGroupPassword">
        <Form.Label> Your Password</Form.Label>
        <Form.Control type="password" required ref={passwordInputRef} />
      </Form.Group>
      <div className="actions">
        <Button type="submit">Login</Button>
      </div>
    </Form>
  );
};

export default AuthForm
