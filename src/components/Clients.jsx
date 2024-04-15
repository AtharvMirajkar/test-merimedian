import React from "react";
import Title from "./Title";
import IndocoLogo from "../assets/clients/Indoco.jpg";
import WockhardtLogo from "../assets/clients/Wockhardt.png";
import zuventusLogo from "../assets/clients/zuventus.jpg";
import KoyeLogo from "../assets/clients/Koye.png";
import MoringoLogo from "../assets/clients/Moringo.png";
import macleodsLogo from "../assets/clients/macleods.png";
import ajantaLogo from "../assets/clients/ajanta.jpg";
import StridesLogo from "../assets/clients/Strides.jpg";

const Clients = () => {
  return (
    <>
      <div>
        <Title text="Clients" />
      </div>
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-5">Our Esteemed Clients</h3>
          <p className="text-center mb-4">
            Our company is proud to serve a diverse range of clients, including
            those who are affiliated with our partner organizations and
            businesses.
          </p>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={IndocoLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto "
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
                className="img-fluid d-block mx-auto "
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={KoyeLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto w-80"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={MoringoLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto "
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={macleodsLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto "
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={ajantaLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto "
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <img
                src={StridesLogo}
                alt="Client 1"
                className="img-fluid d-block mx-auto "
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
