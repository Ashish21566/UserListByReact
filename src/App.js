import React, {Component, useState} from "react";

/*import {BrowserRouter as Router, Route, Switch} from "react-router-dom";*/
import Login from "./Login.js"
import Register from "./Register"
import UserTable from "./UserTable"

function App() {
  const [show , setShow] = useState(false)
  return (
    <>
      <Login/>
      <Register/>
      <UserTable/>
    </>
  );
}

export default App;