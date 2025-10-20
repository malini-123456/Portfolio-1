import React from "react";
// import { gsap } from "gsap";
import { Container, Card } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Card.Body md={8} className="home-about-description" style={{ textAlign: "center" }}>
          <h1 className="style-script-regular">
            let me <span className="purple"> introduce </span> myself
          </h1>
          <p className="home-about-body" >
            I craft code, experiment with design, art, culture, and explore how creativity and logic meet.
            <br />
            <br />This site is my digital playground for projects, notes, and inspirations
            <br />
            <br />
          </p>
        </Card.Body>
      </Container>
    </Container>
  );
}
export default Home2;
