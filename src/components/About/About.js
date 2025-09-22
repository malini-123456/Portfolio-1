import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Section 1: Blending Logic & Creativity */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Blending <strong className="purple">Logic & Creativity</strong>
            </h1>
            <Aboutcard section="logic-creativity" />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Section 2: Web & Code Experiment */}
        <h1 className="project-heading">
          <strong className="purple">Web & Code Experiment</strong>
        </h1>
        <Techstack section="web-code-experiment" />

        {/* Section 3: Curiosity & Growth */}
        <h1 className="project-heading">
          <strong className="purple">Curiosity & Growth</strong>
        </h1>
        <Toolstack section="curiosity-growth" />

        {/* Section 4: An Eye for Detail */}
        <h1 className="project-heading">
          <strong className="purple">An Eye for Detail</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={12}>
            {/* You can add a custom component or content here for detail-oriented skills */}
            <Aboutcard section="eye-for-detail" />
          </Col>
        </Row>

        {/* Section 5: Github */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
