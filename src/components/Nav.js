import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo">LOCALS</div>
        <div>hamburger</div>
      </div>
    );
  }
}

export default Nav;
