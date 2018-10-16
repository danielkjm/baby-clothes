import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default Main;
