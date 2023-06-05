import React from "react";

import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old) {user.collegename}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
