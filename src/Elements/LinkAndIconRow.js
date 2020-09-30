import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
export const LinkAndIconRow = (props) => (
  <Container style={{ backgroundColor: "white" }}>
    <Row className="p-2" style={{ backgroundColor: "white" }}>
      {props.layout.map((element) =>
        element.type &&
        element.type === "link" &&
        element.icon &&
        element.link &&
        element.link.name &&
        element.link.url ? (
          <div style={{ position: "relative", width: 300, height: 34 }}>
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
                position: "absolute",
                display: "table",
                height: "100%"
              }}
            >
              <div
                style={{
                  display: "table-cell",
                  verticalAlign: "middle"
                }}
              >
                <div>whadasdaaaad dasdadad sfddsfseqwergdfsxdcgsdaaaaaaaat</div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </Row>
  </Container>
);
