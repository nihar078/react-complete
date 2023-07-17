import { Button } from "react-bootstrap";
import "./HomeTitleButton.css";

const HomeTitleButton = () => {
  return (
    <div>
      <Button className="latest-album">Get our Latest Album</Button>
      <Button className="play-btn">►</Button>
    </div>
  );
};

export default HomeTitleButton;