import React from "react";
import Slider from "react-slick";
import BookingTourCard from "./bookingTourCard";

import {
  AndyHolmes,
  BrandonKaida,
  DanielJensen,
  EnginAkyurt,
  GuilhermeStecanella,
  KillianPham,
  LeioMclaren,
  TimoStern,
} from "../assets/booking-tour";

const BookingTourSlider = () => {
  const settings_3 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
    <div className="booking-slider">
      <Slider {...settings_3}>
        <BookingTourCard
          image={AndyHolmes}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={BrandonKaida}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={DanielJensen}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={EnginAkyurt}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={GuilhermeStecanella}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={KillianPham}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={LeioMclaren}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
        <BookingTourCard
          image={TimoStern}
          textone="Booking"
          texttwo="Tour"
          link="#"
        />
      </Slider>
    </div>
  );
};

export default BookingTourSlider;
