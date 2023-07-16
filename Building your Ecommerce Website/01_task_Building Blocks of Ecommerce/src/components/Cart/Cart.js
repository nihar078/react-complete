import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./Cart.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  // console.log("Cart component rendered");
  const cartCtx = useContext(CartContext)

  let totalAmount = 0;
  cartCtx.items.forEach((item) => {
    totalAmount += item.quantity * item.price;
  });
  const removeItemHandler =(id) =>{
    cartCtx.removeItem(id)
  }

  return (
    <Container>
      <Modal>
        <h2>CART</h2>
        <Button
          className="cancel"
          variant="outline-secondary"
          onClick={props.onClose}
          style={{ color: "grey" }}
        >
          X
        </Button>
        <Row style={{ fontSize: "1.2rem", marginBottom: "12px" }}>
          <Col md={5} className="cart-item cart-column">
            <span>ITEM</span>
          </Col>
          <Col md={2} className="cart-price cart-column">
            <span>PRICE</span>
          </Col>
          <Col md={4} className="cart-quantity cart-column">
            <span>QUANTITY</span>
          </Col>
        </Row>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            imgUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeItemHandler(item.id)}
          />
        ))}
        <div className="d-flex cart-total justify-content-end">
          <h3>Total</h3>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <Button className="purchase-btn">PURCHASE</Button>
      </Modal>
    </Container>
  );
};

export default Cart;
