import React, { useState, useEffect } from 'react';

import {
  Button,
  Container,
  Form,
} from 'react-bootstrap';
import styled from 'styled-components';

import theme from '../styles/theme';

const Popup = styled.div`
  background-color: ${theme.bodyBG};
  max-width: 30em;
  width: 100%;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'unset')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & .close{
    float: right;
  }
  & > div{
    padding: 1em;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const SignInForm = styled.form`
  clear: both;
  & input[type="checkbox"]{
    margin-top: 0;
  }
`;

const LogIn = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  useEffect(() => { console.log(loginVisible); }, [loginVisible]);
  return (
    <div>
      <Button onClick={() => setLoginVisible(true)}>
        Log In
      </Button>
      <Popup className="shadow-lg" hidden={!loginVisible}>
        <Container>
          <Button
            className="close"
            variant="danger"
            onClick={() => setLoginVisible(false)}
          >
            &#10006;
          </Button>
          <SignInForm>
            <Center>
              <h3 className="h3">Log In</h3>
            </Center>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <div className="d-flex">
                <Form.Check type="checkbox" required />
                &nbsp;&nbsp;
                <Form.Label style={{ marginBottom: 0 }}>Agree to our privacy policy</Form.Label>
              </div>
            </Form.Group>
            <Center>
              <Button
                variant="primary"
                type="submit"
                onClick={() => setLoginVisible(false)}
              >
                Log In
              </Button>
            </Center>
          </SignInForm>
        </Container>
      </Popup>
    </div>
  );
};

export default LogIn;
