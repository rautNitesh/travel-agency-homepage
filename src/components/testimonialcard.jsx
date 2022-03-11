import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="test-card">
      <div className="review-text">
        <p>{props.review}</p>
      </div>
      <div className="user-image">
        <img src={props.userImage} width="50" height="50" />
      </div>
      <div className="user-name">
        <p>{props.userName}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
