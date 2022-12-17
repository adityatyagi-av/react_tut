import logo from './logo.svg';
import './App.css';
import User from './Users'
import React from 'react';


function App() {
  function apple(){
    alert("calling the function");
   let heading1 = prompt("enter the new heading");
  }
  function Rep() {
    return (
      <div>
        <h1>Repost</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Aditya Tyagi</h1>
      <button onClick={()=>{alert("hey nate How's life");
      apple()}}>Click me</button>
      <User />
     {Rep()}

    </div>
  );
}

export default App;
