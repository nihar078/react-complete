import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const email = useSelector((state) => state.auth.email)
  // const authRdx = useSelector((state) => state.auth)
  // console.log(authRdx)

  return (
    <div>
      <div style={{marginLeft: "5px",display: "flex", alignItems: "center"}}>
        <h1>Welcome to your mail box!!!</h1>
        <p style={{marginLeft : "auto" , marginRight: "2px"}}>{email}</p>
      </div>
      <hr />
    </div>
  );
};

export default Home;
