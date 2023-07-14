import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#56CCF2", display: "flex", marginTop: "40px", padding: "20px"}}>
        <h1
          style={{
            color: "white",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "right",
            width: "50%",
            textAlign: "center",
            fontSize: "50px"
          }}
        >
          The Generics
        </h1>
      </Navbar>
    </div>
  );
};

export default Footer;
