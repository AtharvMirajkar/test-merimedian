import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Achievements from "../components/Achievements";

const Home = () => {
  useEffect(() => {
    document.title = "Merimedian";
  }, []);
  return (
    <div>
      <Slider></Slider>
      <Achievements />
    </div>
  );
};

export default Home;
