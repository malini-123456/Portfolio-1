import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright">
          <h3>Designed by ᬲ᭄ᬭᬶ​ᬫᬮᬶᬦᬶ</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
