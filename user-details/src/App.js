import AddUser from "./Components/Users/AddUser";
// import "./App.css";
import UsersList from "./Components/Users/UsersList";
import { useState } from "react";

function App() {
  const [user, setUserList] = useState([]);

  //When add user is clicked, with two arguements. And with that arguements we create a new user and add it to our list.
  const userfunction = (uName, uAge) => {
  
    //  i want to update the list by taking the old list and appending a new element to it. 
    // Here our state update relies on previous state, use alternate form of setusersList 
    setUserList((prevUserList) => {
      // spread operator takes all values of the previous array and adds to new elements to the array, a new JS object : name field uname is the value we store there.  
      // console.log(prevUserList);
      return [...prevUserList, { username: uName, userage: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div className="App">
      {/* onAddUser props */}
      <AddUser onAddUser={userfunction} />
      <UsersList users={user} />
    </div>
  );
}

export default App;
