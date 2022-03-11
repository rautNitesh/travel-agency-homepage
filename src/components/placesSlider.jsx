import React from "react";
import Slider from "react-slick";
import {
  AnnieSpratt,
  BlueDoor,
  Eduardo,
  MarkusWinkler,
  Tokyo,
  River,
  SeaFace,
  Ship,
  Tower,
} from "../assets/places";

import PlacesCard from "./placesCard";

const PlacesSlider = () => {
  const settings_2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
    <div className="places-slider">
      <Slider {...settings_2}>
        <PlacesCard
          image={AnnieSpratt}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={BlueDoor}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={Eduardo}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={MarkusWinkler}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={Tokyo}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={Tower}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={Ship}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={SeaFace}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
        <PlacesCard
          image={River}
          name="Lorem Ipsum"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do "
          price="N20,000"
        />
      </Slider>
    </div>
  );
};

export default PlacesSlider;
