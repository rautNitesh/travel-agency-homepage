import React from "react";
import {
  Fliqpay,
  Frame,
  Paylater,
  Peak,
  Piggyvest,
} from "../../assets/companies";
import "./companies.css";

const Companies = () => {
  return (
    <div className="app__wrapper app__companies">
      <div className="companies">
        <div className="comp-logo">
          <img src={Fliqpay} />
        </div>
        <div className="comp-logo">
          <img src={Frame} />
        </div>
        <div className="comp-logo">
          <img src={Paylater} />
        </div>
        <div className="comp-logo">
          <img src={Peak} />
        </div>
        <div className="comp-logo">
          <img src={Piggyvest} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
