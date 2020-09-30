import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
export const BannerImage = () => (
  <Container
    className="border border-dark position-absolute"
    fluid
    style={{
      height: "75%",
      backgroundImage: "url(bg.jpg)",
      backgroundSize: "cover"
    }}
  ></Container>
);
