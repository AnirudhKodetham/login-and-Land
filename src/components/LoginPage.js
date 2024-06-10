import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../actions/authActions';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === 'success') {
      navigate('/landing');
    }
  }, [loginStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {loginStatus === 'failure' && <p className="error-message">Invalid username or password.</p>}
      </form>
    </div>
  );
};

export default LoginPage;
