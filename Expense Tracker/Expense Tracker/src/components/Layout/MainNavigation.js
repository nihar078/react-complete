import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  // const navigate = useNavigate()
  
  const logoutHandler = () => {
    authCtx.logout();
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
              {!authCtx.isLoggedIn && "Login"}
            </NavLink>
          </Nav>
          {authCtx.isLoggedIn && (
            <Button onClick={logoutHandler} type="button">
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
