import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                margin: "0 auto"
              }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  style={{
                    maxHeight: "450px",
                    borderRadius: "50%",
                    boxShadow: "0 4px 24px rgba(128,0,128,0.3)", // Added box-shadow
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 50, paddingLeft: 20 }} className="heading noto-serif-balinese-regular">
                ᬒᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ{" "}
              </h1>

              <h1 className="heading-name">
                This is
                <strong className="main-name purple"> MALINI</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
