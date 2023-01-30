// Responsible for outputting the user's data\
import React from "react";
import Card from "../UI/Card";
import list from './UsersList.module.css';

const UsersList = (props) => {
  // We rely on props to get our actual array of user data
  return (
    // We gotta import because we wanna use it here.
    <Card className={list.users}> 
      <ul>
        {/* prop name depends on us, map() the array of users to array of JSX elements */}
        {props.users.map((user) => (
          // users is a array of user objects where every object has a name & age property
          //  Key prop having a unique value 
          <li key={user.id}>  
            {/* We are creating a bunch of list pairs here, and that needs a key prop => because it is the item that repeats.  */}
            {user.username} ({user.userage} year's old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
