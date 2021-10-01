import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import styled from 'styled-components';
import Navigation from '../components/navigation';
import GetCar from '../components/get-car';
import HeroBG from '../images/Tools.png';

import '../styles/global.scss';

const Hero = styled.section`
  padding-top: 5em;
  width: 100%;
  height: 100vh;
  font-size: 1.8rem;
  background-image: url(${HeroBG});
  background-size: cover;
  background-position: center center;
`;

const issues = [
  {
    title: 'Axel fatigue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'misfunctioning left indicator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'Dangourous seatbelt material',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'High fuel economy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'Door latch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'Flamability ratings',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'Airbag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
  {
    title: 'Transmission issue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla.',
    id: 'CVS-1992549',
  },
];

const Check = () => {
  const [addingCarVisible, setAddingCarVisible] = useState(false);
  const [cars, setCars] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults([]);
    cars.forEach(() => {
      setResults([...results, ...issues.sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 4))]);
    });
  }, [cars]);
  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <div>
      <Row style={{
        height: '100vh', position: 'fixed', top: 0, width: '100vw',
      }}
      >
        {addingCarVisible
          && (
          <Col
            xl={2}
            className="px-2 d-flex flex-column justify-content-around align-items-center pb-5"
          >
            <div>
              <h1 className="display-5">Add Car: </h1>
              <GetCar
                callback={(carModel) => console.log(carModel)}
                submit={(car) => { setCars([...cars, car]); setAddingCarVisible(false); }}
              />
            </div>
          </Col>
          )}
        <Col style={{ width: '100%' }}>
          <Hero style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              padding: '0 5%',
            }}
            >
              <Navigation />
            </div>
            <Container>
              <h1 className="display-5">Add Car: </h1>
              <Button onClick={() => setAddingCarVisible(true)}>
                Add Car
              </Button>
              <br />
              <br />
              <h1 className="display-5">Your Cars</h1>
              {cars.map((car) => (
                <Row>
                  <h3>
                    {car.make}
                    {' '}
                    {car.model}
                    {' '}
                    {car.year}
                  </h3>
                </Row>
              ))}
              <br />
              <h1 className="display-5">{results.length > 0 ? 'Issues:' : 'No issues found.'}</h1>
              <div>
                {results.map((result) => (
                  <Row style={{ padding: '0.5em 1em', marginBottom: '0.5em' }} className="bg-light">
                    <h3>{result.title}</h3>
                    <h5 className="text-muted">{result.id}</h5>
                    <p>{result.description}</p>
                  </Row>
                ))}
              </div>
            </Container>
          </Hero>
        </Col>
      </Row>
    </div>
  );
};
export default Check;
// export default Check;
