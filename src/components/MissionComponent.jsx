import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { useMediaQuery } from "react-responsive";

const MissionComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const cardStyle = isMobile ? { margin: "0 10px", fontSize: "0.8rem" } : {};

  return (
    <div
      className="my-component"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/medium-shot-doctors-working-together_23-2149994390.jpg?t=st=1714486639~exp=1714490239~hmac=46470edda5416ef2e5c9d4ea55240a7d0a2bd70116c70b67780acd010bef0c2a&w=826)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container>
        <Row>
          <Col xs="12" className="mt-5">
            <h1 className="text-center text-white">Our Mission</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12" className="mt-2">
            <Card>
              <CardBody>
                <CardText>
                  Our mission is to achieve customer satisfaction and establish
                  leadership in selected global markets by excelling in
                  technology. Our human resources will continue to be our most
                  valuable asset and the primary catalyst for our expansion. We
                  are committed to being responsible corporate citizens, guided
                  by elevated ethical standards in all our endeavors.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          {[1, 2, 3, 4].map((i) => (
            <Col xs="12" sm="6" md="3" key={i}>
              <Card style={cardStyle}>
                <CardBody>
                  <CardTitle tag="h5">Card Title {i}</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MissionComponent;
