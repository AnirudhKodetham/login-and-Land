import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import RestaurantSelectionPage from './components/RestaurantSelectionPage';
import OffersPage from './components/OffersPage';
import SupportPage from './components/SupportPage';
import FeedbackPage from './components/FeedbackPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/restaurant-selection" element={<RestaurantSelectionPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
};

export default App;
