import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = (props) => {
  const location = useLocation();
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="p-1">
        <Container>
          <Nav className="m-auto">
            <NavLink
              to="/home"
              className=" pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px", textDecoration: "none" }}
              // style={({isActive}) => ({
              //   color: isActive ? "white" : "", fontFamily: isActive ? "serif" : "", fontSize: isActive ? "18px" : 0
              // })}
            >
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className="pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px", textDecoration: "none" }}
              // style={({isActive}) => ({
              //   color: isActive ? "white" : "", fontFamily: isActive ? "serif" : "", fontSize: isActive ? "18px" : 0
              // })}
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              className=" pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px", textDecoration: "none"}}
              // style={({isActive}) => ({
              //   color: isActive ? "white" : "", fontFamily: isActive ? "serif" : "", fontSize: isActive ? "18px" : 0
              // })}
            >
              ABOUT
            </NavLink>
          </Nav>
        </Container>
        {location.pathname === "/store" && <CartButton onOpen={props.onOpenCart} />}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
