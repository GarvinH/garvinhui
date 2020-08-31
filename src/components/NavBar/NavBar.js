import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => (
  <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Garvin Hui</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to="/" exact>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/experience">
          <Nav.Link>Experience</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/portfolio">
          <Nav.Link>Portfolio</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/education">
          <Nav.Link>Education</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/interests">
          <Nav.Link>Interests</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
