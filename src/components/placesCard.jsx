import React from "react";
import { FiMapPin } from "react-icons/fi";

const PlacesCard = (props) => {
  return (
    <div className="place-card">
      <div className="place-image">
        <img src={props.image} width="300" height="500" />
      </div>
      <div className="place-name">
        <h4 className="bold-text">
          <a href="#">{props.name}</a>
        </h4>
        <span>
          <FiMapPin />
        </span>
      </div>
      <div className="place-description">
        <p className="content-text">{props.description}</p>
      </div>
      <div className="place-price">
        <h4 className="bold-text">{props.price}</h4>
      </div>
    </div>
  );
};

export default PlacesCard;
