import React from 'react';
import { Link } from 'react-router-dom';
import './OffersPage.css';

const OffersPage = () => {
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
      <div className="offers-content">
        <h1>Today's Special Offers</h1>
        <div className="offer-tiles">
          <div className="offer-tile">
            <h2>Buy 1 Get 1 Free</h2>
            <p>On all burgers and pizzas. Limited time offer!</p>
          </div>
          <div className="offer-tile">
            <h2>20% Off</h2>
            <p>Use code SAVE20 on your next order above $50.</p>
          </div>
          <div className="offer-tile">
            <h2>Free Dessert</h2>
            <p>Get a free dessert with every meal ordered this weekend.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
