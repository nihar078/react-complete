import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./UserInput.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [error, setError] = useState();

  const addUserHandel = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values )",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  };
  const errorHandler = (event) => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandel}>
          <label>User Name</label>
          <input
            type="text"
            ref={nameInputRef}
          ></input>
          <label>Age (Years)</label>
          <input
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
