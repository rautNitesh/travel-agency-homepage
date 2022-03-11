import React from "react";
import discoverImg from "../../assets/discover-tmp.png";
import "./discoverWorld.css";

const DiscoverWorld = () => {
  return (
    <div className="app__wrapper discover-world">
      <div className="app__container">
        <div className="app__discover">
          <div className="app__discover__image">
            <img src={discoverImg} />
          </div>
          <div className="app__discover__content">
            <div className="heading">
              <h2 className="heading-text">
                Discover the world
                <br /> with us
              </h2>
            </div>
            <div className="content">
              <p className="content-text">
                From travel planning to touchdown, we take all the hassle out of
                travel. Whether you are navigating travel regulations, looking
                into a special request or need help booking a pet-friendly
                flight, our Concierge team will ensure all steps of your journey
                are stress-free.
              </p>
            </div>
            <div className="button">
              <a href="#" className="custom-button">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverWorld;
