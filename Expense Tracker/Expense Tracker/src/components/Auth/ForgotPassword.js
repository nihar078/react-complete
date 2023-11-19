import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function backToLoginHandler() {
    navigate("/auth");
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  const forgotSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      alert("Verification code is sent in your email. Please check your email");
    } else {
      const data = await response.json();
      console.log(data.error.message);
      alert(data.error.message);
    }
  };

  return (
    <Container>
      <Form className="form" onSubmit={forgotSubmitHandler}>
        <h2>Reset Password</h2>
        <Form.Group className="control">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={emailHandler}
          />
        </Form.Group>
        <Button type="submit" variant="primary">Send reset password link</Button>
      </Form>
      <Button onClick={backToLoginHandler}>Back to Login</Button>
    </Container>
  );
};

export default ForgotPassword;
