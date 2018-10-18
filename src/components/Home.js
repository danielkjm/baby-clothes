import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Nav />
        <div className="intro-section">
          <h1 className="first-header spacing">We Provide Natural Clothes</h1>

          <div className="text-wrapper">
            <p className="text spacing">
              Natural fabrics perfect for delicate skin. Natural fabrics perfect
              for delicate skin
            </p>
          </div>

          <div className="carousel-img" />
          <div className="carousel-wrapper">
            <a className="carousel-control" />
            <a className="carousel-control" />
            <a className="carousel-control" />
            <a className="carousel-control" />
          </div>

          <button className="started-button">GET STARTED</button>

          <div className="text">No credit card required.</div>
        </div>

        <div className="stories-section">
          <h2 className="second-header">TRUSTED BY THE PARENTS</h2>
          <div className="text-wrapper">
            <p className="text">
              Natural fabrics perfect for delicate skin. Natural fabrics perfect
              for delicate skin
            </p>
          </div>
          <button className="white-button">SEE ALL STORIES</button>

          <div className="carousel-img" />
        </div>

        <div className="last-section">
          <p className="blurb">ALL-IN-ONE PLATFORM</p>
          <h2 className="third-header">TRUSTED BY THE PARENTS</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="white-button">GET STARTED</button>
          <div className="learnMore">LEARN MORE</div>
        </div>

        <div className="more-about">
          <div className="company-link">COMPANY</div>
          <div className="locations-link">LOCATIONS</div>
          <div className="follow-link">FOLLOW</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
