import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./UserInput.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegenameInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandel = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegenameInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid name , age (non-empty values) and valid college name",
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
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegenameInputRef.current.value = "";
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
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <label htmlFor="collegename">College Name</label>
          <input id="collegename" type="text" ref={collegenameInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
