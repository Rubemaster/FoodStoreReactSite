import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "./Elements/Navbar.js";
import { BannerImage } from "./Elements/BannerImage.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let navbarLayout = [
    {
      type: "link",
      link: { name: "Home page", url: "#1" }
    },
    {
      type: "link",
      link: { name: "Sign in", url: "#2" }
    },
    {
      type: "dropdown",
      dropdown: {
        title: "what what",
        links: [
          { name: "Home boy", url: "#3" },
          { name: "Bruh", url: "#4" }
        ]
      }
    }
  ];
  return (
    <div className="App">
      <Navbar layout={navbarLayout} />
      <BannerImage />
      <div className="position-absolute" style={{ top: "60%", width: "100%" }}>
        <div
          className="position-absolute"
          style={{ top: "-30px", width: "100%" }}
        >
          <Container>
            <Row>
              <Col className="border border-dark">1 of 2</Col>
            </Row>
            <Row className="pt-4">
              <Col className="border border-dark">2 of 2</Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
