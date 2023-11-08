import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import CartContext from "../../store/cart-context";
import './ProductDetails.css'

const ProductDetails = () => {
  const location = useLocation();
  const param = useParams();
  const cartCtx = useContext(CartContext);

  const item = {
    id: param.id,
    title: location.state.title,
    price: location.state.price,
    quantity: location.state.quantity,
    review: location.state.review,
    imageUrl: location.state.image,
  };

  const addToCartHandler = (item) => {
    // console.log(item);
    cartCtx.addItem(item);
  }

  return(
    <section>
      <h1>Product</h1>
      <Container>
        <Row className="product ">
          <Col className="product-image">
            <img src={item.imageUrl} alt={item.title} />
          </Col>
          <Col className="product-details">
            <h5>Product Details</h5>
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>
              Rating: {item.review}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>{" "}
            </p>
            <Button onClick={()=> addToCartHandler(item)}>ADD TO CART</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
