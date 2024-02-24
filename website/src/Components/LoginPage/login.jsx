import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import loginImage from './logo1.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with username:', username, 'and password:', password);
  };

  return (
      <div className="login-page-container">
        <img src={loginImage} alt="Login" className="login-image" /> {/* Image added here */}
        <div className="login-page">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;
