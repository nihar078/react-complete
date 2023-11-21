import React, { useContext, useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  console.log("AuthForm rendered");
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  //   const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
    // setIsLoading(true);
    if (!isLogin) {
      if (
        !isLogin &&
        confirmPassword !== password &&
        confirmPassword.length > 0
      ) {
        setShowAlert(true);
        return;
      }
      setShowAlert(false);
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
        // console.log(data);
        console.log("successfully signup", data);
        alert("successfuly signup.. try to login");
      } else {
        const data = await response.json();
        alert(data.error.message);
      }
      const user = {
        email: email,
        password: password,
      };
      console.log(user);
      setEmail("");
      setConfirmPassword("");
      setPassword("");
    } else {
      // setShowAlert(false);

      //   try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`,
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
        //   setIsLoading(true);
        const data = await response.json();
        console.log("succesfully login", data);
        authCtx.login({ token: data.idToken, email: email });
        navigate("/home");
      } else {
        const data = await response.json();
        alert(data.error.message);
      }
      setEmail("");
      setPassword("");
    }

    // setShowAlert(false);
    // let url;
    // if (isLogin) {
    //   url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`;
    // } else {
    //   url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_AYVFYK_Apy1tAbRKzko3LPCcqO4Kf6w`;
    // }

    // try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data)
    //     authCtx.login({ token: data.idToken, email: email });
    //     navigate("/home");
    //   } else {
    //     const data = await response.json();
    //     let errorMessage = "Authentication failed";
    //     if (data && data.error && data.error.message) {
    //       errorMessage = data.error.message;
    //       throw new Error(errorMessage);
    //     }
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }
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
          <div style={{position: "relative", display: "flex"}}>
            <Form.Control
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={passwordHandler}
            />
            <Button
              className="password-tooggle"
              variant="link"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </div>
        </Form.Group>
        {!isLogin && (
          <Form.Group className="control" controlId="fromGroupConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              required
              value={confirmPassword}
              onChange={confirmPasswordHandler}
            />
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
        <Link
          to="/forgotPassword"
          variant="link"
          style={{ textDecoration: "none" }}
        >
          {isLogin && "Forgot password"}
        </Link>
      </Form>
      <div className="actions">
        <Button
          variant="light"
          className="toggle"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Have an account?SignUp" : "Have an account?Login"}
        </Button>
      </div>
      {/* <p style={{ textAlign: "center" }}>
        Already have an account?<a href="log">Login</a>{" "}
        <Button variant="link">Login</Button>
      </p> */}
    </Container>
  );
};

export default AuthForm;
