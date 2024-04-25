import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product1 from "../assets/Products/product1.png";
import product2 from "../assets/Products/product2.png";
import product3 from "../assets/Products/product3.png";
import product4 from "../assets/Products/product4.png";
import product5 from "../assets/Products/product5.png";
import product6 from "../assets/Products/product6.png";
import product7 from "../assets/Products/product7.png";
import product8 from "../assets/Products/product8.png";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const products = [
    { id: "MAZORB-D3", title: "MAZORB-D3", imageUrl: product1 },
    { id: "FB-Rich", title: "FB Rich", imageUrl: product2 },
    { id: "Cis Q Forte", title: "Cis Q Fortee", imageUrl: product3 },
    { id: "UPCOOL-20", title: "UPCOOL 20", imageUrl: product4 },
    { id: "UPTRACE", title: "UPTRACE", imageUrl: product5 },
    { id: "Ne-norm", title: "Ne-norm", imageUrl: product6 },
    { id: "Pilenorm", title: "Pilenorm", imageUrl: product7 },
    {
      id: "UPTACE-M Injection",
      title: "UPTACE-M Injection",
      imageUrl: product8,
    },
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

  const handleProductClick = (productId) => {
    // Navigate to the products page and pass the selected product ID as a URL parameter
    navigate(`/products/${productId}`);
  };

  return (
    <div className="container mt-5 mb-5">
      <h3 className="text-center">
        Our Range Of Innovative Healthcare Products
      </h3>
      <div className="row justify-content-center mt-4">
        <div className="col-12 overflow-hidden">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <img
                  src={product.imageUrl}
                  className="img-fluid rounded mx-auto" // Center image horizontally
                  alt={product.title}
                  style={{ maxHeight: "250px" }} // Specify dimensions here
                  onClick={() => handleProductClick(product.id)} // Handle click event
                  role="button" // Add role button for accessibility
                  tabIndex="0" // Add tabIndex for accessibility
                />
                <h4
                  style={{ fontSize: "1.1rem" }}
                  onClick={() => handleProductClick(product.id)} // Handle click event
                  role="button" // Add role button for accessibility
                  tabIndex="0" // Add tabIndex for accessibility
                >
                  {product.title}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
