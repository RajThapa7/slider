import React, { useState } from "react"
import './App.css';
import data from './data';
import Review from './review';
import "./index.css"


function App() {
  const [index, setIndex] = useState(0);
  const previous = () => {
    let newIndex = index-1;
    if (newIndex < 0) newIndex = data.length-1;
    setIndex(() => newIndex)
  }

  const next = () => {
    let newIndex = index+1;
    if (newIndex > data.length-1) newIndex = 0;
    setIndex(() => newIndex)
  }

  const random = () => {
    let newIndex = Math.floor((Math.random()*data.length))
    setIndex(() => newIndex)
  }


  return (
    <>
    <h1 className="title">Our reviews</h1>
<div className="outer-container">
    <Review props={data[index]} />
  <p>
    <button onClick={()=>previous()}>Previous</button>
    <button onClick={()=>random()}>Random</button>
    <button onClick={()=>next()}>Next</button>

  </p>
</div>    
 </>
  );
}

export default App;
