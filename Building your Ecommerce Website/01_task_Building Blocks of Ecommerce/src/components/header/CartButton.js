import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "./CartButton.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCntx = useContext(CartContext)

  let quantity = 0;
  cartCntx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });


  return (
    <div>
      <Button
        className="button "
        variant="outline-info"
        style={{ fontFamily: "serif", fontSize: "18px" }}
        onClick={props.onOpen}
      >
        cart
      </Button>
      <h3
        className="badge badge-wrap"
        variant="outline-info"
        style={{ color: "lightblue" }}
      >
        {quantity}
      </h3>
    </div>
  );
};

export default CartButton;
