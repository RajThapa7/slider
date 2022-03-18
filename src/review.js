import React from 'react'
import "./index.css"

export default function Review({props}) {
  
    return (
        <div className="container">
            <img src={props.image} alt={props.image} className="image"/>
            <h2 style={{textTransform : "capitalize"}}>{props.name}</h2>
            <p  className = "job">{props.job}</p>
            <p className="text">{props.text}</p>
            
        </div>
    )
}
