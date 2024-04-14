import React, { useEffect } from "react";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    document.title = "Merimedian";
  }, []);
  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
