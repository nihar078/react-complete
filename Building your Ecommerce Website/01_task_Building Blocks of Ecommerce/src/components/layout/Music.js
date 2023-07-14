import React from "react";
import "./Music.css";
import { Card, Col, Container, Button, Row } from "react-bootstrap";

const productsArr = [
  {
    id: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Music = () => {
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
                      <Card.Img src={product.imageUrl} alt={product.alt} />
                    </div>
                    <Card.Text className="mt-3">
                      {`$${product.price}`}
                      <Button className="button-wrap" variant="info">
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
          <Button variant="secondary" style={{color: "lightblue" , fontWeight: "bold"}}>See the cart</Button>
        </div>
      </Container>
    </div>
  );
};

export default Music;
