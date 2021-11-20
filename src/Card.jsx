import React from "react";
import "./index.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.imgsrc} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
            {props.text}
        </p>
        <a href="#" className="btn btn-primary">
          Watch Now 
        </a>
      </div>
    </div>
  );
}

export default Card;
