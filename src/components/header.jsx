import React from 'react';
import {
  Button,
  Container, Nav, Navbar,
} from 'react-bootstrap';
import styled from 'styled-components';

import theme from '../styles/theme';

const Center = styled.div`
  text-align: center;
`;

const Navigation = styled(Navbar)`
  position: fixed;
  width: 100vw;
`;

const BrandH1 = styled.h1`
  color: ${theme.light};
  text-align: center;
`;

const BrandSubtitle = styled.h2`
  margin-top: -0.3em;
  color: ${theme.light};
  font-size: 2.5rem;
`;

const Header = () => (
  <Navigation expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <Center>
          <BrandH1 className="display-1">
            Check Your Car
          </BrandH1>
          <BrandSubtitle>
            Saving Cars, Saving Lives
          </BrandSubtitle>
        </Center>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/"><Button>Log in</Button></Nav.Link>
          {/* <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Link</Nav.Link>
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="">Action</NavDropdown.Item>
            <NavDropdown.Item href="">Another action</NavDropdown.Item>
            <NavDropdown.Item href="">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navigation>
);

export default Header;
