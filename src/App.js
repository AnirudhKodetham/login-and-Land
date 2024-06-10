import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import RestaurantSelectionPage from './components/RestaurantSelectionPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/restaurants" element={<RestaurantSelectionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
