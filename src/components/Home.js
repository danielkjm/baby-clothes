import React, { Component } from 'react';
import Nav from './Nav';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Nav />

        <div className="intro">
          <div className="header">We Provide Natural Clothes</div>
          <div className="text">Natural fabrics perfect for delicate skin</div>
          <div className="carousel" />
          <div className="started-button">GET STARTED</div>
          <div className="text">No credit card required.</div>
        </div>
      </div>
    );
  }
}

export default Home;
