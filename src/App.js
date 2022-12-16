import logo from './logo.svg';
import './App.css';
import User from './Users'
import React from 'react';

function App() {
  function Rep() {
    return (
      <div>
        <h1>Repost</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User />
     {Rep()}

    </div>
  );
}

export default App;
