import React from 'react';
import { Link } from 'react-router-dom';
import './SupportPage.css';

const SupportPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">ByteBeat</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
      <div className="support-content">
        <h1>How can we help you?</h1>
        <div className="support-tiles">
          <div className="support-tile">
            <h2>Order Issues</h2>
            <p>Having issues with your order? Let us help.</p>
          </div>
          <div className="support-tile">
            <h2>Payment Issues</h2>
            <p>Need help with payment? We are here to assist you.</p>
          </div>
          <div className="support-tile">
            <h2>Other Issues</h2>
            <p>Any other issues? Reach out to us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
