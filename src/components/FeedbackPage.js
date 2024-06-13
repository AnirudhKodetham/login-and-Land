import React from 'react';
import { Link } from 'react-router-dom';
import './FeedbackPage.css';

const FeedbackPage = () => {
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
      <div className="feedback-content">
        <h1>We value your feedback</h1>
        <form className="feedback-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
