import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./Cart.css";

const Cart = (props) => {
  console.log("Cart component rendered");
  const cartElements = [
    {
      id: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: "Album 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

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
        {cartElements.map((item) => (
          <CartItem
            key={item.id}
            imgUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <div className="d-flex cart-total justify-content-end">
          <h3>Total</h3>
          <span>$415</span>
        </div>
        <Button className="purchase-btn">PURCHASE</Button>
      </Modal>
    </Container>
  );
};

export default Cart;
