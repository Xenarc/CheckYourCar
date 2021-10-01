import React from 'react';
import {
  Container, Navbar,
} from 'react-bootstrap';
import styled from 'styled-components';
import Navigation from './navigation';

const NavigationHeader = styled(Navbar)`
position: fixed;
width: 100%;
`;
const Header = () => (
  <NavigationHeader expand="lg">
    <Container>
      <Navigation />
    </Container>
  </NavigationHeader>
);

export default Header;
