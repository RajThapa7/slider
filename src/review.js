import React from 'react'
import "./index.css"

export default function Review({props}) {
    return (
        <div className="container">
            <img src={props.image} alt={props.image} className="image"/>
            <h1>{props.name}</h1>
            <h2>{props.job}</h2>
            <p className="text">{props.text}</p>
            
        </div>
    )
}
