import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Achievements from "../components/Achievements";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  useEffect(() => {
    document.title = "Merimedian";
  }, []);
  return (
    <div>
      <Slider></Slider>
      <Achievements />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
