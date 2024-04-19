import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product1 from "../assets/medicine1.jpg";
import product2 from "../assets/medicine2.png";
import product3 from "../assets/medicine3.png";

const FeaturedProducts = () => {
  const products = [
    { id: 1, title: "Product 1", imageUrl: product1 },
    { id: 2, title: "Product 2", imageUrl: product2 },
    { id: 3, title: "Product 3", imageUrl: product3 },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items to show at a time
    slidesToScroll: 4, // Number of items to scroll at a time
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Show arrows
          autoplay: true, // Enable autoplay
          autoplaySpeed: 5000, // Autoplay speed in milliseconds
        },
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        Our range of innovative healthcare products
      </h2>
      <div className="row justify-content-center">
        <div className="col-12">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <img
                  src={product.imageUrl}
                  className="img-fluid rounded mx-auto" // Center image horizontally
                  alt={product.title}
                  style={{ maxHeight: "200px" }} // Specify dimensions here
                />
                <h4>{product.title}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
