import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import theme from './styles/theme';
import Page from './components/page';
import HeroBG from './images/Car.jpg';

const Signup = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const GetStartedText = styled.h3`
  color: ${theme.light};
  text-align: center;
  font-size: 1.8rem;
`;

const Hero = styled.section`
  padding-top: 25vh;
  width: 100vw;
  height: 100vh;
  font-size: 1.8rem;
  background-image: url(${HeroBG});
  background-size: cover;
  background-position: center center;
`;

function App() {
  return (
    <Page>
      <Hero>
        <GetStartedText>
          Get Started Today.
        </GetStartedText>
        <Signup>
          <Button>Sign up</Button>
        </Signup>
      </Hero>
    </Page>
  );
}

export default App;
