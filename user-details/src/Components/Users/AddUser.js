//  Logic for adding a new user
import React from "react";
import Card from "../UI/Card";
import user from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  // We can use state management to update the state with every keystroke and save what the user enters in a variable.
  const [username, setusername] = useState("");
  const [userage, setuserage] = useState(""); // Here  age is a string not a number
  const [error, setErrorMesge] = useState();

  const addUser = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setErrorMesge({
        title: "Invalid input",
        message: "Please enter valid inputs",
      });
      return;
    }
    if (+userage < 15) {
      //  Passing an object to the setErrorMesge function
      setErrorMesge({
        title: "Eligibility above 15",
        message: "Not eligible",
      });
      // As age is a string add + to enusure its a num
      return;
    }
    props.onAddUser(username, userage);
    // console.log(username, userage);
    setuserage("");
    setusername("");
  };

  const nameChangeHandler = (event) => {
    setusername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setuserage(event.target.value);
  };
  // resetting error to undefined or null 
   const errorHandler = () =>{
    setErrorMesge(null);
   }
  return (
    <div>
      {/* If error exits reder the error model */}
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={user.input}>
        <h2>Add a new user</h2>
        <form onSubmit={addUser}>
          <label htmlFor="username">Add a username</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age (years only)</label>
          <input
            type="number"
            id="num"
            value={userage}
            onChange={ageChangeHandler}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
