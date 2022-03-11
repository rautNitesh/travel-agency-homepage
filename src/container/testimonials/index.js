import React from "react";
import TestimonialSlider from "../../components/testimonialslider";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="app__wrapper testimonials">
      <div className="app__container">
        <h2 className="heading-text">
          What our users <br />
          say about us
        </h2>
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
