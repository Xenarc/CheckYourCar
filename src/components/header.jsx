import React from 'react';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';

import '../styles/global.css';
import '../styles/reset.css';

const Header = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm">
    <Container>
      <Navbar.Brand href="/">Check Your Car</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Link</Nav.Link>
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="">Action</NavDropdown.Item>
            <NavDropdown.Item href="">Another action</NavDropdown.Item>
            <NavDropdown.Item href="">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
