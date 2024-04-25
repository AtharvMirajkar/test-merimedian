import React, { useState, useEffect } from "react";
import "../Styles/Testimonials.css"; // Import CSS file for component-specific styles

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Smantha - Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      text: "Merimedian Medicare stands out for its commitment to excellence. I've always received the medications I need promptly and efficiently, thanks to their attentive service. Their dedication to ensuring I have access to necessary medicines sets them apart as a reliable healthcare provider.",
    },
    {
      name: "Lisa Cudrow - Graphic Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      text: "Merimedian Medicare has been my trusted healthcare partner for years, and their dedication to professionalism and customer satisfaction continues to impress me. Whenever I've needed assistance, their prompt responsiveness and helpfulness have made all the difference.",
    },
    {
      name: "John Smith - Marketing Specialist",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      text: "Merimedian Medicare consistently delivers top-notch service and support. Their dedication to providing high-quality healthcare solutions is evident in every interaction. Whenever I've needed assistance, their responsiveness and expertise have been invaluable.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="gradient-custom">
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="text-center mb-4 pb-2">
              <i className="fas fa-quote-left fa-3x text-white"></i>
            </div>

            <div className="card testimonial-card ">
              <div className="card-body px-4 py-5">
                <div
                  className="carousel slide carousel-dark"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators mb-0">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`indicator ${
                          index === activeIndex ? "active" : ""
                        }`}
                      ></button>
                    ))}
                  </div>

                  <div className="carousel-inner pb-5">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === activeIndex ? "active" : ""
                        }`}
                      >
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-8 d-flex justify-content-center mb-3">
                                <img
                                  src={testimonial.image}
                                  className="rounded-circle shadow-1 testimonial-image"
                                  alt="avatar"
                                />
                              </div>
                              <div className="col-lg-8 col-md-6 col-sm-12 text-center text-md-start">
                                <h4 className="mb-3 testimonial-name">
                                  {testimonial.name}
                                </h4>
                                <p className="mb-0 pb-3 testimonial-text">
                                  {testimonial.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={handlePrev}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    onClick={handleNext}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 pt-2">
              <i className="fas fa-quote-right fa-3x text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
