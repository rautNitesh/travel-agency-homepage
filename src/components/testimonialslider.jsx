import React from "react";
import TestimonialCard from "./testimonialcard";
import Slider from "react-slick";
import { Ben, Clayton, Joseph, Jurica, Vince } from "../assets/profiles";

const TestimonialSlider = () => {
  const settings_1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-slider">
      <Slider {...settings_1}>
        <TestimonialCard
          review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip. "
          userImage={Ben}
          userName="Ben Parker"
        />
        <TestimonialCard
          review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip. "
          userImage={Clayton}
          userName="Clayton Watson"
        />
        <TestimonialCard
          review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip. "
          userImage={Joseph}
          userName="Joseph Gonzalez"
        />
        <TestimonialCard
          review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip. "
          userImage={Jurica}
          userName="Jurica Koletic"
        />
        <TestimonialCard
          review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip. "
          userImage={Vince}
          userName="Vince Veras"
        />
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
