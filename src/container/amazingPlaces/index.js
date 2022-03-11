import React from "react";
import PlacesSlider from "../../components/placesSlider";
import "./amazingPlaces.css";

const AmazingPlaces = () => {
  return (
    <div className="app__wrapper amazing-places">
      <div className="app__container">
        <h2 className="heading-text">
          Amazing places we <br />
          bring to you
        </h2>
      </div>
      <div className="places-slider-wrapper">
        <PlacesSlider />
      </div>
    </div>
  );
};

export default AmazingPlaces;
