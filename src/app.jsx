import React from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import Page from './components/page';

const H1 = styled.h1`
  color: ${theme.primary};
  text-align: center;
`;

function App() {
  return (
    <Page>
      <H1 className="display-1">
        Check Your Car
      </H1>

    </Page>
  );
}

export default App;
