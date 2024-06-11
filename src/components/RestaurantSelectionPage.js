import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BillModal from './BillModal';
import './RestaurantSelectionPage.css';

const RestaurantSelectionPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
      <div className="restaurant-content">
        <h1>Please select your restaurant</h1>
        <div className="restaurant-tiles">
          <div className="restaurant-tile" onClick={openModal}>
            <img src="/images/restaurant1.jpg" alt="Restaurant 1" />
          </div>
          <div className="restaurant-tile" onClick={openModal}>
            <img src="/images/restaurant2.jpg" alt="Restaurant 2" />
          </div>
          <div className="restaurant-tile" onClick={openModal}>
            <img src="/images/restaurant3.jpg" alt="Restaurant 3" />
          </div>
          <div className="restaurant-tile" onClick={openModal}>
            <img src="/images/restaurant4.jpg" alt="Restaurant 4" />
          </div>
        </div>
      </div>
      <BillModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default RestaurantSelectionPage;
