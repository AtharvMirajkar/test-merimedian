import React, { useEffect } from "react";
import Title from "../components/Title.jsx";

const About = () => {
  useEffect(() => {
    document.title = "About - Merimedian";
  }, []);

  return (
    <div>
      <div>
        <Title text="About us" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <p>
              Meridian Enterprises Pvt. Ltd. is a progressive pharmaceutical
              company that stands for innovation. Meridian was established in
              1992 with the objective of launching a range of innovative
              healthcare products which offer new benefits to satisfy real needs
              unfulfilled by other products.
            </p>
            <p>
              We are the first company in India to introduce a saline nasal
              decongestant product and have continued being the pioneers of
              several other unique formulations providing better healthcare.
            </p>
            <p>
              Meridian has a fully equipped formulation development department
              capable of developing various pharmaceutical formulations in
              different dosage forms. We have successfully commercialized
              several products for customers in India and globally.
            </p>
            <p>
              Meridian Enterprises Pvt. Ltd. is a progressive pharmaceutical
              company that stands for innovation. Meridian was established in
              1992 with the objective of launching a range of innovative
              healthcare products which offer new benefits to satisfy real needs
              unfulfilled by other products.
            </p>
            <p>
              We are the first company in India to introduce a saline nasal
              decongestant product and have continued being the pioneers of
              several other unique formulations providing better healthcare.
            </p>
            <p>
              Meridian has a fully equipped formulation development department
              capable of developing various pharmaceutical formulations in
              different dosage forms. We have successfully commercialized
              several products for customers in India and globally.
            </p>
            <p>
              Meridian Enterprises Pvt. Ltd. is a progressive pharmaceutical
              company that stands for innovation. Meridian was established in
              1992 with the objective of launching a range of innovative
              healthcare products which offer new benefits to satisfy real needs
              unfulfilled by other products.
            </p>
            <p>
              We are the first company in India to introduce a saline nasal
              decongestant product and have continued being the pioneers of
              several other unique formulations providing better healthcare.
            </p>
            <p>
              Meridian has a fully equipped formulation development department
              capable of developing various pharmaceutical formulations in
              different dosage forms. We have successfully commercialized
              several products for customers in India and globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
