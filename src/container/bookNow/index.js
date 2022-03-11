import React from "react";
import BookNowForm from "../../components/bookNowForm";
import "./bookNow.css";
import { GiCommercialAirplane } from "react-icons/gi";

const BookNow = () => {
  return (
    <div className="app__wrapper booknow">
      <div className="booknow__container">
        <svg className="dotted-plane" viewBox="0 0 100 100">
          <path
            d="M160 60 C0,200 -80,-40 50,-10"
            fill="none"
            stroke="#ffa737"
            stroke-dasharray="5 5"
            strokeWidth="0.2"
          ></path>
        </svg>
        <span className="plane">
          <GiCommercialAirplane />
        </span>
        <div className="booknow-box">
          <svg className="two-l" viewBox="0 0 100 100">
            <path
              d="M-100 70 L-10 -20 L50 40 L30 60 L-10 20 L-80 90 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.2"
            ></path>
            <path
              d="M0 40 L40 80 L110 10 L130 30 L40 120 L-20 60 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.2"
            ></path>
          </svg>
          <h2 className="heading-text">
            Book now to start <br />
            that adventure
          </h2>
          <div className="booknow-form">
            <BookNowForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
