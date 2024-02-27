import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from './Components/LoginPage/login'; // Adjust the path based on your folder structure
import './Components/LoginPage/login.css';
import login from "./Components/LoginPage/login";

const App = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};
export default App
