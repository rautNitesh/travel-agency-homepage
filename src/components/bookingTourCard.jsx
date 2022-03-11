import React from "react";

const BookingTourCard = (props) => {
  return (
    <div
      className="BookingTourCard"
      style={{ backgroundImage: "url(" + props.image + ")" }}
    >
      <a href={props.link}>
        {props.textone}
        <br />
        {props.texttwo}
      </a>
    </div>
  );
};

export default BookingTourCard;
