import React from "react";
import { Button } from "react-bootstrap";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";

const Home = () => {
  const email = useSelector((state) => state.auth.email)
  return (
    <div>
      <div style={{ left: "1px", display: "flex", alignItems: "center"}}>
        <Button
          variant="light"
          style={{ borderRadius: "50px", marginRight: "1rem" }}
        >
          {<IoMdMenu />}
        </Button>
        <h1>Welcome to your mail box!!!</h1>
        <p style={{marginLeft : "auto" , marginRight: "2px"}}>{email}</p>
      </div>
      <hr />
    </div>
  );
};

export default Home;
