import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      className="mt-5"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#features">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <p className="p-2 border rounded-circle border-primary">IMG</p>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
