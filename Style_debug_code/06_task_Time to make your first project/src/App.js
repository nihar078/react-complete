import React, { useState } from 'react';
// import './App.css';
import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';
function App(){
  const [userList, setUserList] = useState([])

  const addUserHandler = (Name, Age) =>{
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name : Name, age: Age, id: Math.random().toString()}]
      // const updateList = [...prevUsersList]
      // updateList.push({name : Name, age: Age, id: Math.random().toString()})
      // return updateList
    })
  }
  return (
    <div>
      <UserInput onAddUser = {addUserHandler} />
      <UserList users={userList} />
    </div>
  )
}
export default App;
