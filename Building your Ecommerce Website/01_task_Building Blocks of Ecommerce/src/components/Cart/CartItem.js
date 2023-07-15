import React, { useState } from "react";
import "./CartItem.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ imgUrl, title, price, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value);
  };

  return (
    <div>
      <Container>
        <Row className="mb-4">
          <Col md={5} className="d-flex item align-items-center">
            <img className="cart-img" src={imgUrl} alt="cart-items" />
            {/* <Image src="imgUrl" style={{width: "80px"}} /> */}
            <span>{title}</span>
          </Col>
          <Col md={2} className="d-flex price align-items-center">
            <span>{price}</span>
          </Col>
          <Col md={4} className="d-flex quantity align-items-center">
            <input
              type="text"
              value={itemQuantity}
              onChange={handleQuantityChange}
            />
            <Button variant="danger" style={{ fontWeight: "bold" }}>
              REMOVE
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartItem;
