import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div>
      <li className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
      <button
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        Delete Movie
      </button>
    </div>
  );
};

export default Movie;
