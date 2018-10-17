import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo">LOCALS</div>
        <div className="hamburger">
          <div className="lettuce" />
          <div className="cheese" />
          <div className="patty" />
        </div>
      </nav>
    );
  }
}

export default Nav;
