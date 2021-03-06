import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Wallet from '../pages/Wallet/Wallet';

class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
export default MainRoute;
