// import React, { useState } from "react";
import React, { useState, Fragment } from "react";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";

function App() {
  // const [usersList, setUsersList] = useState([]);
  // const addUserHandel = (Name, Age, Collegename) => {
  //   setUsersList((prevUsersList) => {
  //     return [
  //       ...prevUsersList,
  //       {
  //         name: Name,
  //         age: Age,
  //         collegename: Collegename,
  //         id: Math.random().toString(),
  //       },
  //     ];
  //   });
  // };
  //or

  const [usersList, setUsersList] = useState([]);
  const addUserHandel = (Name, Age, Collegename) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.push({
        name: Name,
        age: Age,
        collegename: Collegename,
        id: Math.random().toString(),
      });
      return updatedUsersList;
    });
  };

  // return (
  //   <React.Fragment>
  //     <UserInput onAddUser = {addUserHandel} />
  //     <UserList users={usersList}/>
  //   </React.Fragment>
  // );

  //or

  return (
    <Fragment>
      <UserInput onAddUser={addUserHandel} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
