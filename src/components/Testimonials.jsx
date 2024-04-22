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
              "At Merimedian Medicare, we pride ourselves on delivering
              exceptional service and support to our valued clients. But don't
              just take our word for it – hear what some of our satisfied
              clients have to say about their experiences with us."
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TestimonialCard
              name="Maria Smantha"
              backgroundColor="#9d789b"
              imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              quote="Merimedian Medicare stands out for its commitment to excellence. I've always received the medications I need promptly and efficiently, thanks to their attentive service. Their dedication to ensuring I have access to necessary medicines sets them apart as a reliable healthcare provider."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TestimonialCard
              name="Lisa Cudrow"
              backgroundColor="#7a81a8"
              imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              quote="Merimedian Medicare has been my trusted healthcare partner for years, and their dedication to professionalism and customer satisfaction continues to impress me. Whenever I've needed assistance, their prompt responsiveness and helpfulness have made all the difference."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TestimonialCard
              name="John Smith"
              backgroundColor="#6d5b98"
              imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              quote="Merimedian Medicare consistently delivers top-notch service and support. Their dedication to providing high-quality healthcare solutions is evident in every interaction. Whenever I've needed assistance, their responsiveness and expertise have been invaluable."
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
