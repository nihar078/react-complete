import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

import "./AuthForm.css";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPasswod, setShowPasswod] = useState(false);
  const [showConfirmPasswod, setShowConfirmPasswod] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const togglePasswordVisibility = () => {
    setShowPasswod((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPasswod((prevState) => !prevState);
  };
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
    if (!isLogin) {
      if (confirmPassword !== password && confirmPassword.length > 0) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }

      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnUORMfzKjfXTz2B41LKokHy_ks37ANlI`,
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
        alert("successfuly signup.. try to login");
      } else {
        const data = await response.json();
        alert(data.error.message);
      }

      const user = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      console.log(user);
    } else {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnUORMfzKjfXTz2B41LKokHy_ks37ANlI`,
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
        console.log("succesfully login", data);
        dispatch(authActions.login({ token: data.idToken, email: email }));
        navigate("/home");
      } else {
        const data = await response.json();
        alert(data.error.message);
      }
    }
  };

  return (
    <Container>
      <Form className="auth" onSubmit={formSubmitHandler}>
        <h2>{isLogin ? "Login" : "SignUp"}</h2>
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
          <div
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
            }}
          >
            <Form.Control
              type={showPasswod ? "text" : "password"}
              required
              value={password}
              onChange={passwordHandler}
            />
            <Button
              variant="link"
              onClick={togglePasswordVisibility}
              style={{ position: "absolute", right: "1px" }}
            >
              {showPasswod ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </div>
        </Form.Group>
        {!isLogin && (
          <Form.Group className="control" controlId="fromGroupConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <div
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
              }}
            >
              <Form.Control
                type={showConfirmPasswod ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={confirmPasswordHandler}
              />
              <Button
                variant="link"
                onClick={toggleConfirmPasswordVisibility}
                style={{ position: "absolute", right: "1px" }}
              >
                {showConfirmPasswod ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
          </Form.Group>
        )}
        {showAlert && (
          <Alert variant="danger">
            Confirm Password doesn't match, please try again!
          </Alert>
        )}
        <div className="actions">
          <Button type="submit" variant="primary">
            {isLogin ? "Login" : "SignUp"}
          </Button>
        </div>
      </Form>
      <div className="actions">
        <Button
          variant="light"
          className="toggle"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Have an account?Signup" : "Have an account?Login"}
        </Button>
      </div>
    </Container>
  );
};

export default AuthForm;
