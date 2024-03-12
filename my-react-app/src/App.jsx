import React from 'react';
import './App.css'; // Import CSS file

function Product({ name, description }) {
  const downloadFont = () => {
    // Simulate downloading the font file
    alert(`Downloading font: ${name}`);
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={downloadFont}>Download</button>
    </div>
  );
}

function Theme({ name, description }) {
  const downloadTheme = () => {
    // Simulate downloading the theme file
    alert(`Downloading theme: ${name}`);
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={downloadTheme}>Download</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Font & Theme Store</h1>
      </header>
      <div className="container">
        <div className="products">
          <Product name="Font 1" description="A classic serif font suitable for formal documents and invitations." />
          <Product name="Font 2" description="A modern sans-serif font perfect for digital interfaces and websites." />
          <Product name="Font 3" description="An elegant script font ideal for branding and decorative purposes." />
          <Product name="Font 4" description="A playful display font great for attention-grabbing headlines and titles." />
          <Product name="Font 5" description="A versatile serif font suitable for both print and digital media." />
          <Product name="Font 6" description="A minimalist sans-serif font perfect for clean and contemporary designs." />
          {/* Add more Product components here for additional fonts */}
        </div>
        <div className="products">
          <Theme name="Theme 1" description="A light and airy theme with pastel colors, ideal for feminine and delicate designs." />
          <Theme name="Theme 2" description="A bold and vibrant theme with bright colors, perfect for energetic and dynamic projects." />
          <Theme name="Theme 3" description="A sleek and modern theme with minimalist design elements, great for professional portfolios." />
          <Theme name="Theme 4" description="A cozy and rustic theme with earthy tones, suitable for nature-inspired and organic projects." />
          <Theme name="Theme 5" description="A futuristic theme with metallic accents, ideal for high-tech and cutting-edge designs." />
          <Theme name="Theme 6" description="A retro-inspired theme with vintage textures, perfect for nostalgic and throwback projects." />
          {/* Add more Theme components here for additional themes */}
        </div>
      </div>
    </div>
  );
}

export default App;
