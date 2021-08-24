import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/reset.css';

const Root = styled.div`
  width: 100%!important;
  background-color: ${theme.bodyBG};
`;

const Page = ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
);

export default Page;
