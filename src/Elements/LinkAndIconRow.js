import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
export const LinkAndIconRow = (props) => (
  <Container>
    <Row className="p-3" style={{ backgroundColor: "white" }}>
      {props.layout.map((element) =>
        element.type &&
        element.type === "link" &&
        element.icon &&
        element.link &&
        element.link.name &&
        element.link.url ? (
          <Col
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              position: "relative"
            }}
          >
            <a href={element.link.url}>
              <div
                className="rounded-circle"
                style={{
                  position: "absolute",
                  backgroundColor: "#9FA2B2",
                  padding: "17px"
                }}
              >
                <div
                  style={{
                    height: "0px",
                    width: "0px"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        top: "-1px",
                        color: "#3C7A89"
                      }}
                    >
                      {element.icon ? element.icon : null}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "#3C7A89",
                  paddingLeft: 44,
                  height: 34,
                  overflowY: "hidden"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    top: 17,
                    display: "table",
                    height: 10000,
                    marginTop: -5000
                  }}
                >
                  <div
                    style={{
                      display: "table-cell",
                      verticalAlign: "middle",
                      lineHeight: "1"
                    }}
                  >
                    {element.link.name}
                  </div>
                </div>
              </div>
            </a>
          </Col>
        ) : null
      )}
    </Row>
  </Container>
);
