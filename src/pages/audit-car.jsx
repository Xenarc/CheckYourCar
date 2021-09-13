import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import GetCar from '../components/get-car';
import Page from '../components/page';
import HeroBG from '../images/Tools.png';

const Hero = styled.section`
  padding-top: 25vh;
  width: 100vw;
  height: 100vh;
  font-size: 1.8rem;
  background-image: url(${HeroBG});
  background-size: cover;
  background-position: center center;
`;

const Audit = () => (
  <Page>
    <Hero>
      <Container>
        <h1>Hello</h1>
        <GetCar callback={(carModel) => console.log(carModel)} />
      </Container>
    </Hero>
    {/* <AmplifySignOut /> */}
  </Page>
);

// export default withAuthenticator(Audit);
export default Audit;
