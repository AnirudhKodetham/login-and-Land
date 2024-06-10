import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantSelectionPage.css';

const RestaurantSelectionPage = () => {
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
      <div className="restaurant-content">
        <h1>Please select your restaurant</h1>
        <div className="restaurant-tiles">
          <div className="restaurant-tile">
            <img src="/images/restaurant1.jpg" alt="Restaurant 1" />
          </div>
          <div className="restaurant-tile">
            <img src="/images/restaurant2.jpg" alt="Restaurant 2" />
          </div>
          <div className="restaurant-tile">
            <img src="/images/restaurant3.jpg" alt="Restaurant 3" />
          </div>
          <div className="restaurant-tile">
            <img src="/images/restaurant4.jpg" alt="Restaurant 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSelectionPage;
