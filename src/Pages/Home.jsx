import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Achievements from "../components/Achievements";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import ValuesMissionVision from "../components/ValuesMissionVision";

const Home = () => {
  useEffect(() => {
    document.title = "Merimedian";
  }, []);
  return (
    <div>
      <Slider></Slider>
      <Achievements />
      <ValuesMissionVision />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
