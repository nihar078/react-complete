import { Container } from "react-bootstrap";
import TourItem from "./TourItem";
import "./TourItem.css";

const Home = () => {
  const tourItems = [
    {
      id: 1,
      date: "JUL16",
      place: "DETROIT,MI",
      spec_place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 2,
      date: "JUL19",
      place: "TORONTO,ON",
      spec_place: "TORONTO,ON",
    },
    {
      id: 3,
      date: "JUL22",
      place: "BRISTOW, VA",
      spec_place: "JIGGY LUBE LIVE",
    },
    {
      id: 4,
      date: "JUL29",
      place: "PHOENIX, AZ",
      spec_place: "PHOENIX, AZ",
    },
    {
      id: 5,
      date: "AUG2",
      place: "LAS VEGAS, NV",
      spec_place: "T-MOBILE ARENA",
    },
    {
      id: 6,
      date: "AUG7",
      place: "CONCORD, CA",
      spec_place: "CONCORD PAVILION",
    },
  ];
  return (
    <Container>
      <h1
        style={{
          fontFamily: "'Metal Mania', cursive",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Tours
      </h1>
      {tourItems.map((item) => (
        <TourItem
          key={item.id}
          id={item.id}
          date= {item.date}
          place={item.place}
          spec_place={item.spec_place}
        />
      ))}
    </Container>
  );
};

export default Home;
