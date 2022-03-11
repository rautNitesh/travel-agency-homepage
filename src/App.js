import React from "react";
import "./App.css";
import MidImage from "./assets/mid-image.jpg";

import {
  AmazingPlaces,
  BookNow,
  Companies,
  DiscoverWorld,
  Footer,
  Home,
  Newsletter,
  Testimonials,
  WhatWeDo,
} from "./container";

const App = () => {
  return (
    <>
      <Home />
      <DiscoverWorld />
      <img src={MidImage} className="mid-image" />
      <WhatWeDo />
      <AmazingPlaces />
      <Testimonials />
      <Companies />
      <BookNow />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
