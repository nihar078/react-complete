import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import AuthContext from "../../store/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSl";

const MainNavigation = () => {
  // const authCtx = useContext(AuthContext);
  const authRdx = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  
  const logoutHandler = () => {
    // authCtx.logout();
    dispatch(authActions.logout())
    // navigate("/auth");
  };

  return (
    <div>
      <header>
        <Navbar bg="light" style={{justifyContent : "space-between"}}>
          <Nav>
            <NavLink
              to="/home"
              className="mx-3 px-2"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/auth"
              className="mx-3 px-2"
              style={{ textDecoration: "none" }}
            >
              {/* {!authCtx.isLoggedIn && "Login"} */}
              {!authRdx.isLoggedIn && "Login"}
            </NavLink>
          </Nav>
          {authRdx.isLoggedIn && (
            <Button onClick={logoutHandler} type="button" style={{marginRight: "3px"}}>
              Logout
            </Button>
          )}
        </Navbar>
      </header>
      {/* <hr /> */}
    </div>
  );
};

export default MainNavigation;
