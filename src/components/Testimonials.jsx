import React from "react";
import "../Styles/Testimonials.css";

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        {" "}
        {/* Added container class */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TestimonialCard
              name="Maria Smantha"
              backgroundColor="#9d789b"
              imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              quote="Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TestimonialCard
              name="Lisa Cudrow"
              backgroundColor="#7a81a8"
              imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              quote="Neque cupiditate assumenda in maiores repudi mollitia architecto."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TestimonialCard
              name="John Smith"
              backgroundColor="#6d5b98"
              imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              quote="Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, backgroundColor, imageSrc, quote }) => {
  return (
    <div className="card testimonial-card">
      <div className="card-up" style={{ backgroundColor }}></div>
      <div className="avatar mx-auto bg-white">
        <img src={imageSrc} alt={name} className="rounded-circle img-fluid" />
      </div>
      <div className="card-body">
        <h4 className="mb-4 text-center">{name}</h4>
        <hr />
        <p className="dark-grey-text mt-4 text-center">
          <i className="fas fa-quote-left pe-2"></i>
          {quote}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
