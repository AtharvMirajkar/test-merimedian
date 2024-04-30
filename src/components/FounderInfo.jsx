import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";

const FounderInfo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const customStyles = {
    sectionAll: {
      position: "relative",
      paddingTop: "80px",
      paddingBottom: "80px",
      minHeight: "100vh",
    },
    textCustom: {
      color: "#00bd2a",
    },
    aboutIcon: {
      fontSize: "22px",
      height: "65px",
      width: "65px",
      lineHeight: "65px",
      display: "inline-block",
      background: "#fff",
      borderRadius: "35px",
      color: "#00bd2a",
      boxShadow: "0 8px 20px -2px rgba(158, 152, 153, 0.5)",
    },
    aboutHeaderMain: {
      maxWidth: isDesktopOrLaptop ? "450px" : "100%",
      fontSize: "24px",
    },
    aboutIconSpan: {
      position: "relative",
      top: "-10px",
    },
    aboutContentBoxAll: {
      padding: "28px",
    },
  };

  return (
    <section
      className="section_all bg-light"
      id="about"
      style={customStyles.sectionAll}
    >
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="section_title_all text-center">
              <h3 className="font-weight-bold">
                Welcome To{" "}
                <span className="text-custom" style={customStyles.textCustom}>
                  Lorem Ipsum
                </span>
              </h3>
              <p className="section_subtitle mx-auto text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br />
                Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <div className="">
                <i className=""></i>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="vertical_content_manage mt-5">
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="about_header_main mt-3">
              <div className="about_icon_box">
                <p className="text_custom font-weight-bold">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
              <h4
                className="about_heading text-capitalize font-weight-bold mt-4"
                style={customStyles.aboutHeaderMain}
              >
                Lorem Ipsum is simply dummy text of the printing industry.
              </h4>
              <p className="text-muted mt-3">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <p className="text-muted mt-3">
                {" "}
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="img_about mt-3">
              <img
                src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={4} md={6} sm={12} xs={12}>
            <div
              className="about_content_box_all mt-3"
              style={customStyles.aboutContentBoxAll}
            >
              <div className="about_detail text-center">
                <div className="about_icon">
                  <i
                    className="fas fa-pencil-alt"
                    style={customStyles.aboutIcon}
                  ></i>
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                  Creative Design
                </h5>
                <p className="edu_desc mt-3 mb-0 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <div
              className="about_content_box_all mt-3"
              style={customStyles.aboutContentBoxAll}
            >
              <div className="about_detail text-center">
                <div className="about_icon">
                  <i
                    className="fab fa-angellist"
                    style={customStyles.aboutIcon}
                  ></i>
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                  We make Best Result
                </h5>
                <p className="edu_desc mb-0 mt-3 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <div
              className="about_content_box_all mt-3"
              style={customStyles.aboutContentBoxAll}
            >
              <div className="about_detail text-center">
                <div className="about_icon">
                  <i
                    className="fas fa-paper-plane"
                    style={customStyles.aboutIcon}
                  ></i>
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                  best platform{" "}
                </h5>
                <p className="edu_desc mb-0 mt-3 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FounderInfo;
