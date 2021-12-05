import React, { useState } from "react"
import './App.css';
import data from './data';
import Review from './review';
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


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
  <FontAwesomeIcon icon={faArrowLeft} onClick={()=>previous()} className="previous">
{/* <button onClick={()=>previous()}>Previous</button> */}
</FontAwesomeIcon>
    <FontAwesomeIcon icon={faArrowRight} onClick={()=>next()} className="next">
    // <button onClick={()=>next()}>Next</button>
    </FontAwesomeIcon>
    <br />
    <button onClick={()=>random()} className="random">Suprise Me</button>


  </p>
</div>    
 </>
  );
}

export default App;
