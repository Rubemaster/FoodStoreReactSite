import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
export const ButtonRow = (props) => (
  <Container style={{ backgroundColor: "white" }}>
    <Row className="p-2" style={{ backgroundColor: "white" }}>
      {props.layout.map((element) =>
        element.type &&
        element.type === "link" &&
        element.link &&
        element.link.name &&
        element.link.url ? (
          <a
            href={element.link.url}
            className="p-2 text-nowrap"
            style={{ color: "#3C7A89" }}
          >
            <div
              style={{
                backgroundColor: "#9FA2B2",
                width: "170px",
                padding: "20px 0px 20px 0px",
                borderRadius: "20px"
              }}
            >
              <div
                style={{
                  height: "0px"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    transform: "translate(0px, -50%)",
                    textAlign: "center"
                  }}
                >
                  {" "}
                  {element.link.name}
                </div>
              </div>
            </div>
          </a>
        ) : null
      )}
    </Row>
  </Container>
);
