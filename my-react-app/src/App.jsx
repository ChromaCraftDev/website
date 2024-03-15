import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import exampleImage from './Images/sample.jpg';

function Product({ name, description }) {
  const downloadFont = () => {
    // Simulate downloading the font file
    alert(`Downloading font: ${name}`);
  };

  return (
    <div className="card product">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={exampleImage} alt="product" className="product-image" />
      <button className="downloadBtn" onClick={downloadFont}>Download</button>
    </div>
  );
}

function Theme({ name, description }) {
  const downloadTheme = () => {
    // Simulate downloading the theme file
    alert(`Downloading theme: ${name}`);
  };

  return (
    <div className="card theme">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={exampleImage} alt="theme" className="theme-image" />
      <button className="downloadBtn" onClick={downloadTheme}>Download</button>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>ChromaCraft Fonts & Themes Store</h1>
        <p>Your one-stop destination for high-quality fonts and themes.</p>
        <img src={exampleImage} alt="sample" className='example-image'/>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>Mode</button>
      </header>
      <div className="container">
        <div className="products">
          <h2>Fonts</h2>
          <Product name="Font 1" description="A classic serif font suitable for formal documents and invitations." />
          <Product name="Font 2" description="A modern sans-serif font perfect for digital interfaces and websites." />
          <Product name="Font 3" description="An elegant script font ideal for branding and decorative purposes." />
          {/* Add more Product components here for additional fonts */}
        </div>
        <div className="products">
          <h2>Themes</h2>
          <Theme name="Theme 1" description="A light and airy theme with pastel colors, ideal for feminine and delicate designs." />
          <Theme name="Theme 2" description="A bold and vibrant theme with bright colors, perfect for energetic and dynamic projects." />
          <Theme name="Theme 3" description="A sleek and modern theme with minimalist design elements, great for professional portfolios." />
          <Theme name="Theme 1" description="A light and airy theme with pastel colors, ideal for feminine and delicate designs." />
          <Theme name="Theme 2" description="A bold and vibrant theme with bright colors, perfect for energetic and dynamic projects." />
          {/* Add more Theme components here for additional themes */}
        </div>
      </div>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h3>Team</h3>
      <ul>
        <li>Thsanuga rodrigo</li>
        <li>Kavindu Ashein</li>
        <li>Sandew Hiruditha</li>
        <li>Eshan Vithanage</li>
        <li>Sehandu Mallawarachchi</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact</h3>
      <ul>
        <li>Email: info@chromacraft.com</li>
        <li>Phone: +94(46)330 3629</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Follow Us</h3>
      <ul className="social-links">
        <li><a href="https://www.facebook.com/chromacraft" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.twitter.com/chromacraft" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.instagram.com/chromacraft" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  </div>
  <p className="copyright">&copy; 2024 ChromaCraft Fonts & Themes Store. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
