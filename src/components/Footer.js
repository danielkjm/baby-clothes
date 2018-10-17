import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-body">
          <div className="logo">LOCALS</div>
          <div className="footer-links">
            <div>Privacy</div>
            <div>Cookies</div>
            <div>Terms</div>
            <div>Cancellation Policy</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
