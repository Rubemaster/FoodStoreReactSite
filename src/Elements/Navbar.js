import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar as LocalNavbar,
  Nav,
  NavDropdown,
  Row,
  Col
} from "react-bootstrap";

export function Navbar(props) {
  let validateDropdown = (dropdown) =>
    dropdown && dropdown.title && dropdown.links && dropdown.links.length > 0
      ? dropdown.links
          .map((link) => (link.name && link.url ? true : false))
          .includes(true)
      : false;
  let validateLink = (link) => (link.name && link.url ? true : false);
  let validateNavbar = (navbar) =>
    navbar && navbar.length > 0
      ? navbar
          .map((element) =>
            element.type === "link"
              ? validateLink(element.link)
                ? true
                : false
              : element.type === "dropdown"
              ? validateDropdown(element.dropdown)
                ? true
                : false
              : false
          )
          .includes(true)
      : false;
  let getLink = (link) =>
    validateLink(link) ? (
      <Nav.Link href={link.url}> {link.name} </Nav.Link>
    ) : null;
  let getDropdown = (dropdown) =>
    validateDropdown(dropdown) ? (
      <NavDropdown title={dropdown.title} id="basic-nav-dropdown">
        {dropdown.links.map((link) =>
          link.name && link.url ? (
            <NavDropdown.Item href={link.url}>{link.name}</NavDropdown.Item>
          ) : null
        )}
      </NavDropdown>
    ) : null;

  return validateNavbar(props.layout) ? (
    <LocalNavbar fixed="top" bg="light" expand="lg">
      <Row>
        <Col className="pr-0">
          <LocalNavbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
        <Col>
          <LocalNavbar.Brand href="#home">React-Bootstrap</LocalNavbar.Brand>
        </Col>
      </Row>
      <LocalNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {props.layout.map((element) =>
            element.type === "link"
              ? getLink(element.link)
              : element.type === "dropdown"
              ? getDropdown(element.dropdown)
              : null
          )}
        </Nav>
      </LocalNavbar.Collapse>
    </LocalNavbar>
  ) : null;
}
