import React, { useEffect } from "react";
import Title from "../components/Title";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Merimedian";
  }, []);

  return (
    <>
      <div>
        <Title text="Contact us" />
      </div>

      <section className="contact-us py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Address section */}
              <div className="address">
                <h2>Our Address</h2>

                <p>Merimedian Medicare Pvt. Ltd.</p>
                <p>Infinity Tower</p>
                <p>CS No. 239/A/2, Indumati Road,</p>
                <p>Maharashtra-416003</p>
                <p>
                  <strong>Email:</strong> merimedian@gmail.com
                </p>
                <p>
                  <strong>Tel:</strong> 91-22-62222200, 91-22-22022245
                </p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Google Map section */}
              <div className="google-map">
                {/* You can embed your Google Map here */}
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.044189315121!2d-122.08624628488017!3d37.42242437981986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e889b0135e3%3A0xdfe5b51170d65e5e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1646545974566!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
