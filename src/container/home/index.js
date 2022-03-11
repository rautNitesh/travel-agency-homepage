import React from "react";
import Navbar from "../../components/navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./home.css";

const Home = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero__wrapper">
        <div className="hero__content">
          <div className="hero__heading">
            <h1 className="hero__heading-text">
              Travel to any <br />
              corner of the world
            </h1>
          </div>

          <div className="hero__sub">
            <p>Feeling cool like your favourite place</p>
          </div>
          <div className="hero__button">
            <a href="#" className="custom-button">
              Get Started <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
