import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Account from './Account';
import {Route, Switch } from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <main>
        <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/Account" component={Account} />

        </Switch>
      </main>
    )
  }

}
export default App;