import React from "react";
import Title from "./Title";
import IndocoLogo from "../assets/clients/Indoco.jpg";
import WockhardtLogo from "../assets/clients/Wockhardt.png";
import zuventusLogo from "../assets/clients/zuventus.jpg";

const Clients = () => {
  return (
    <>
      <div>
        <Title text="Clients" />
      </div>
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-5">Our Esteemed Clients</h3>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={IndocoLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto w-80"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={WockhardtLogo}
                alt="Client 2"
                className="img-fluid d-block mx-auto w-80"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={zuventusLogo}
                alt="Client 3"
                className="img-fluid d-block mx-auto w-60"
              />
            </div>
            {/* Add more client logos as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
