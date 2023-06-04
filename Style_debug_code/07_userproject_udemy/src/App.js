import React, { useState } from "react";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";

function App() {
  // const [usersList, setUsersList] = useState([])
  // const addUserHandel = (Name, Age) =>{
  //   setUsersList((prevUsersList) => {
  //     return[...prevUsersList , {name: Name, age: Age, id: Math.random().toString()}]
  //   })
  // }
  const [usersList, setUsersList] = useState([])
  const addUserHandel = (Name, Age) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList]
      updatedUsersList.push({name: Name, age: Age, Id: Math.random().toString()})
      return updatedUsersList
    })
  }

  return (
    <div>
      <UserInput onAddUser = {addUserHandel} />
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
