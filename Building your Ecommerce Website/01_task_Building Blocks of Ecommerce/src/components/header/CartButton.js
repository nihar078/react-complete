import React from "react";
import { Button } from "react-bootstrap";
import "./CartButton.css";

const CartButton = (props) => {
  return (
    <div>
      <Button
        className="button "
        variant="outline-info"
        style={{ fontFamily: "serif", fontSize: "18px", }}
        onClick={props.onOpen}
      >
        cart
      </Button>
      <h3
        className="badge badge-wrap"
        variant="outline-info"
        style={{ color: "lightblue" }}
      >
        0
      </h3>
    </div>
  );
};

export default CartButton;
