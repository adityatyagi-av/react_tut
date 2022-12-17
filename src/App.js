import {useState} from 'react';
import './App.css';
import User from './Users'



function App() {
  const [data,setData]=useState();
  const [num,setnum]=useState(0);
  function updateData(){
    setData(prompt("enter new heading"))
  }
  function updateNum(){
    setnum(num+1);
  }
  function Rep() {
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={updateNum}>Increase number</button>
      </div>
    )
  }
  console.warn("_________________________")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Click me</button>
      <User />
     {Rep()}

    </div>
  );
}

export default App;
