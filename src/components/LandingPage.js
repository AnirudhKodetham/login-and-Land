import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleTileClick = () => {
    navigate('/restaurants');
  };

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
      <div className="landing-content">
        <h1>What are you craving today?</h1>
        <div className="tiles">
          <div className="tile" onClick={handleTileClick}>
            <img src="/images/image1.jpg" alt="Tile 1" />
          </div>
          <div className="tile" onClick={handleTileClick}>
            <img src="/images/image2.jpg" alt="Tile 2" />
          </div>
          <div className="tile" onClick={handleTileClick}>
            <img src="/images/image3.jpg" alt="Tile 3" />
          </div>
          <div className="tile" onClick={handleTileClick}>
            <img src="/images/image4.jpg" alt="Tile 4" />
          </div>
          <div className="tile" onClick={handleTileClick}>
            <img src="/images/image5.jpg" alt="Tile 5" />
          </div>
          <div className="tile" onClick={handleTileClick}>
            <img src="/images/image6.jpg" alt="Tile 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
