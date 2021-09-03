import React from 'react';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import styled from 'styled-components';

import theme from '../styles/theme';
import LogIn from './login';

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
  font-size: 4rem;
`;

const BrandSubtitle = styled.h2`
  margin-top: -0.3em;
  color: ${theme.light};
  font-size: 2rem;
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
      <Nav className="justify-content-end">
        <LogIn />
      </Nav>
    </Container>
  </Navigation>
);

export default Header;
