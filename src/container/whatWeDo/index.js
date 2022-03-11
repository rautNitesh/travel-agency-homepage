import React from "react";
import BookingTourSlider from "../../components/bookingTourSlider.jsx";
import "./whatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="app__wrapper whatwedo">
      <div className="app__container">
        <h2 className="heading-text">What we do</h2>
      </div>
      <BookingTourSlider />
    </div>
  );
};

export default WhatWeDo;
