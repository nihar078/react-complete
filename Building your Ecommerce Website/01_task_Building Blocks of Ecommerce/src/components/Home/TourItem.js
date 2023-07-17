import { Button, Col, Container, Row } from "react-bootstrap";
import "./TourItem.css";

const TourItem = (props) => {
  return (
    // <Container>
    //   <Row className="tour-item">
    //     <Col md={2}>{props.date}</Col>
    //     <Col md={3} className="tour-places">
    //       {props.place}
    //     </Col>
    //     <Col md={4} className="tour-places">
    //       {props.spec_place}
    //     </Col>
    //     <Col md={3} className="buy-tickets">
    //       <Button>BUY TICKETS</Button>
    //     </Col>
    //   </Row>
    // </Container>

    <Container>
      <Row
        style={{
          borderBottom: "1px solid black",
          padding: "5px",
          fontFamily: "-moz-initial",
          textAlign: "center"
        }}
      >
        <Col md={2}>{props.date}</Col>
        <Col md={3} style={{ color: "grey" }}>
          {props.place}
        </Col>
        <Col md={4} style={{color: "grey"}}>{props.spec_place}</Col>
        <Col md={3} className="buy-tickets">
          <Button
            variant="info"
            style={{ color: "white", fontWeight: "bold",}}
          >
            BUY TICKETS
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TourItem;
