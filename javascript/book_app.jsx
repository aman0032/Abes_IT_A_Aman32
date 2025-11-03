import React, { useState } from "react";

function Change() {
  const [count, setCount] = useState(0);

  function change() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={change}>Click</button>
      <p>Hello clicked {count} times</p>
    </div>
  );
}

export default Change;
import React from "react";
import './Book.css'

function Book(){
  return(
    <div id="book">
      <img src="" alt="" height={100} width={100}/>
      <h1>TITLE:MAths</h1>
      <h1>250</h1>
    </div>
  )
}
// #book{
//   border: 5px solid red;
//   height: 300px;
//   width: 300px;
//   background-color:coral;
// }class