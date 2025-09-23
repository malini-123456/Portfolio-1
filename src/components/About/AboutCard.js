import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I’m Malini, an aspiring front-end front-end developer and an avid painter living in the beautiful Bali.
            <br /><br />
            My journey into web development started out of curiosity and quickly turned into a passion.
            <br /><br />
            I love how programming allows me to blend logic with creativity, making it both fun and fulfilling.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
