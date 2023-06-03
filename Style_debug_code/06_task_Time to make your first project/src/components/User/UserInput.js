import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "./UserInput.css";
import ErrorModel from "../UI/ErrorModel/ErrorModel";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label>User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameHandler}
          />
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
