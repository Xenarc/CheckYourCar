import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/reset.css';
import '../styles/global.scss';

const Root = styled.div`
  background-color: ${theme.bodyBG};
`;

const Page = ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
);

export default Page;
