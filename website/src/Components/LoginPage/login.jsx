import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
const hanldeLogin = () => {
  console.log('Username ', username);
  console.log('Password ', password);
};
return(
  <div className='login-container'>
    <h1>Login</h1>
  <form className='login-form' onSubmit={(e) => e.preventDefault()}>
    <input 
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
    <input 
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      />
      <button type="submit" onClick={hanldeLogin}>
        Login
      </button>
    </form>
   </div> 
);
};
export default LoginPage;

