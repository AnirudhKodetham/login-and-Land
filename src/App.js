import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  </Router>
);

export default App;
