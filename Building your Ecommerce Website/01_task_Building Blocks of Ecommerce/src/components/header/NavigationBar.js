import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";

const NavigationBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="p-1">
        <Container>
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className=" pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#store"
              className="pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px" }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              href="#about"
              className=" pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px" }}
            >
              ABOUT
            </Nav.Link>
          </Nav>
        </Container>
        <CartButton onOpen={props.onOpenCart} />
      </Navbar>
    </div>
  );
};

export default NavigationBar;
