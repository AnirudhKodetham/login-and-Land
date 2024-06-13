// src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleTileClick = () => {
    navigate('/restaurant-selection');
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">ByteBeat</div>
        <ul className="navbar-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/offers">Offers</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/feedback">Feedback</a></li>
        </ul>
      </div>
      <div className="landing-content">
        <h1>What are you craving today?</h1>
        <div className="tiles-container">
          <div className="tile" onClick={handleTileClick}>
            <div className="tile-content">
              <img src="/images/image1.jpg" alt="Tile 1" />
            </div>
          </div>
          <div className="tile" onClick={handleTileClick}>
            <div className="tile-content">
              <img src="/images/image2.jpg" alt="Tile 2" />
            </div>
          </div>
          <div className="tile" onClick={handleTileClick}>
            <div className="tile-content">
              <img src="/images/image3.jpg" alt="Tile 3" />
            </div>
          </div>
          <div className="tile" onClick={handleTileClick}>
            <div className="tile-content">
              <img src="/images/image4.jpg" alt="Tile 4" />
            </div>
          </div>
          <div className="tile" onClick={handleTileClick}>
            <div className="tile-content">
              <img src="/images/image5.jpg" alt="Tile 5" />
            </div>
          </div>
          <div className="tile" onClick={handleTileClick}>
            <div className="tile-content">
              <img src="/images/image6.jpg" alt="Tile 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
