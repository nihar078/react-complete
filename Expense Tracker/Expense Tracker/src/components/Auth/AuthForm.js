import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";

import "./AuthForm.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (confirmPassword !== password && confirmPassword.length > 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    //   try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("User has successfully signed up", data);
        } else {
          const data = await response.json();
        //   let errorMessage = "Authentication failed!";
        //   if (data && data.error && data.error.message) {
        //     errorMessage = data.error.message;
        //     throw new Error(errorMessage);
        //   }
          alert(data.error.message);
          // alert(errorMessage)
        }
    //   } catch (error) {
    //     alert(error.message);
    //   }
      const user = {
        email: email,
        password: password,
      };
      console.log(user);
      setEmail("");
      setConfirmPassword("");
      setPassword("");
    }
  };

  return (
    <Container>
      <Form className="auth" onSubmit={formSubmitHandler}>
        <h2>SignUp</h2>
        <Form.Group className="control" controlId="formGroupEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={emailHandler}
          />
        </Form.Group>
        <Form.Group className="control" controlId="formGroupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={passwordHandler}
          />
        </Form.Group>
        <Form.Group className="control" controlId="fromGroupConfirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            required
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          />
        </Form.Group>
        {showAlert && (
          <Alert variant="danger">
            Confirm Password doesn't match, please try again!
          </Alert>
        )}
        {/* {!validPassword ? "Confirm Password doesn't match, Try again!" : ""} */}
        <div className="actions">
          <Button type="submit" variant="primary">
            SignUp
          </Button>
        </div>
      </Form>
      <p style={{ textAlign: "center" }}>
        Already have an account?<a href="log">Login</a>
      </p>
    </Container>
  );
};

export default AuthForm;
