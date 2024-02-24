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
 <div>
  <img src='C:\Users\hsand\Desktop\website\website\logo1.jpg' alt='cclogo' />
  <div className='login-container'>
  <form className='login-form' onSubmit={(e) => e.preventDefault()}>
    <div className='login-text'>
      <h2>LOGIN</h2>
    </div>
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
 </div> 
);
};
export default LoginPage;

