import React from "react";
import { Button } from "react-bootstrap";

const ExpenseItem = (props) => {
  return (
    <div>
      <li
        style={{
          display: "flex",
          gap: "6rem",
          textAlign: "center",
          margin: "7px",
        }}
      >
        <h6>Rs. {props.amount}</h6>
        <p>{props.description}</p>
        <h6>{props.category}</h6>
        <Button variant="secondary" onClick={props.onEdit} >
          Edit
        </Button>
        <Button variant="danger" onClick={props.onRemove}>
          Delete
        </Button>
      </li>
      <hr />
    </div>
  );
};

export default ExpenseItem;