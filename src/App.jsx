import React, { Component } from 'react';
import MainRoute from './routes/MainRoute';

import GlobalStyle from './styles/global';

class App extends Component {
  render() {
    return (
      <>
        <MainRoute />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
