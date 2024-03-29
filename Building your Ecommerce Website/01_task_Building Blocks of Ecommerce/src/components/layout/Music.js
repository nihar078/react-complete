import React, { useContext } from "react";
import "./Music.css";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const productsArr = [
  {
    id: "Album 1",
    title: "Colors",
    price: 100,
    quantity: 1,
    review: 4,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "Album 2",
    title: "Black and white Colors",
    price: 50,
    quantity: 1,
    review: 5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    quantity: 1,
    review: 4.5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "Album 4",
    title: "Blue Color",
    price: 100,
    quantity: 1,
    review: 3,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Music = (props) => {
  const cartCntx = useContext(CartContext);
  const addItemToCartHandler = (item) => {
    // console.log(item)
    cartCntx.addItem(item);
    // console.log(cartCntx)
  };
  return (
    <div className="music">
      <h1>Music</h1>
      <Container>
        <Row xs={4} md={2}>
          {productsArr.map((product) => (
            <div key={product.id}>
              <Col className="d-flex justify-content-center">
                <Card className="card-wrap" style={{ width: "18rem" }}>
                  <Card.Body>
                    <h4 className="text-center pb-4">{product.title}</h4>
                    <div className="image-container">
                      <Link
                        to={`/store/product-details/${product.id}`}
                        state={{
                          image: product.imageUrl,
                          price: product.price,
                          title: product.title,
                          review: product.review,
                          quantity: product.quantity,
                        }}
                      >
                        <Card.Img src={product.imageUrl} alt={product.alt} />
                      </Link>
                    </div>
                    <Card.Text className="mt-3">
                      {`$${product.price}`}
                      <Button
                        className="button-wrap"
                        variant="info"
                        onClick={() => addItemToCartHandler(product)}
                      >
                        ADD TO CART
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
        <div className="text-center mt-3">
          <Button
            variant="secondary"
            style={{ color: "lightblue", fontWeight: "bold" }}
            onClick={props.onShowCart}
          >
            See the cart
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Music;
