import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <div>
      <>
        <Navbar fixed="top" bg="light" variant="light">
          <Container>
            <img className="logo" alt="logo" src={logo}/>
            <Nav className="me-right">
              <Nav.Link href="#home">ABOUT</Nav.Link>
              <Nav.Link href="#features">PROJECTS</Nav.Link>
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
