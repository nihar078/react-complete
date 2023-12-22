import React from "react";
import { Button } from "react-bootstrap";
import { IoMdMenu } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div style={{ left: "1px", display: "flex" }}>
        <Button
          variant="light"
          style={{ borderRadius: "50px", marginRight: "1rem" }}
        >
          {<IoMdMenu />}
        </Button>
        <h1>Welcome to your mail box!!!</h1>
      </div>
      <hr />
    </div>
  );
};

export default Home;
