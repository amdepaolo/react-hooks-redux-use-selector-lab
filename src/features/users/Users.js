import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector(state => state.users)
  const usersLength = useSelector(state => state.users.length)
  console.log(users)


  return (
    <div>
      <ul>
        Users!
        {users.map(user => <li>{user.username}</li>)}
        <p>Total Users: {usersLength}</p>
      </ul>
    </div>
  );
}

export default Users;
