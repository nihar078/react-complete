import React from "react";

import "./Card.css";
// import classes from './Card.css'

const Card = (props) => {
  const classes = " card " + props.className;
  return <div className= {classes}>{props.children}</div>;

//   return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;
