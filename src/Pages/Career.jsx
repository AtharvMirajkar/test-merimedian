import React, { useEffect } from "react";
import careerImage from "../assets/career-image.avif"; // Import your career-related image here
import Title from "../components/Title";

const Career = () => {
  useEffect(() => {
    document.title = "Careers - Merimedian";
  }, []);

  return (
    <>
      <div>
        <Title text="Careers" />
      </div>

      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-lg-4">
            <img src={careerImage} className="img-fluid w-100" alt="Career" />
          </div>
          <div className="col-lg-8 d-flex align-items-center">
            <div className="px-4">
              <p>
                Merimedian Medicare Pvt Ltd is seeking talented individuals to
                join our team and contribute to our mission of developing
                innovative healthcare solutions to improve the lives of patients
                worldwide.
              </p>
              <p>
                By becoming a part of Merimedian, you will have the opportunity
                to be part of a dynamic and growing organization. Our company
                culture fosters teamwork, innovation, and personal development,
                offering fulfilling career paths for our employees.
              </p>
              <p>
                At Merimedian, we believe in nurturing talent and providing a
                supportive environment for professional growth. Our employees
                are valued members of the Merimedian family, where dedication
                and excellence are rewarded and recognized.
              </p>
              <p>
                We are committed to long-term success and seek individuals who
                share our vision and values. If you are passionate about making
                a difference in healthcare and are looking for a rewarding
                career opportunity, we encourage you to apply.
              </p>
              <p>
                To apply, please submit your latest resume. Even if there are no
                current openings, we will keep your information on file for
                future opportunities that match your skills and experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
