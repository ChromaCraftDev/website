import Navbar from "../components/Navbar"
import React from 'react';
import exampleImage from '../assets/Images/sample.jpg';
import sampleFile from '../assets/DownloadFiles/sampleFile.pdf';
import './HomePage.css';

function Product({ name, description }) {
    const downloadFont = () => {
      // Simulate downloading the font file
      alert(`Downloading font: ${name}`);
      // Perform the file download
      const anchor = document.createElement('a');
      anchor.href = sampleFile;
      anchor.setAttribute('download', '');
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
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


function HomePage(){
    return(
<div>
    <Navbar></Navbar>
    <div className="App">
      <header>
        <h1>ChromaCraft Fonts & Themes Store</h1>
        <p>Your one-stop destination for high-quality fonts and themes.</p>
        <img src={exampleImage} alt="sample" className='example-image'/>
      </header>
      <div className="container">
        <div className="products">
            <h2>Themes</h2>
                <Theme name="Theme 1" description="A light and airy theme with pastel colors, ideal for feminine and delicate designs." />
                <Theme name="Theme 2" description="A bold and vibrant theme with bright colors, perfect for energetic and dynamic projects." />
                <Theme name="Theme 3" description="A sleek and modern theme with minimalist design elements, great for professional portfolios." />
            {/* Add more Theme components here for additional themes */}
        </div>
            <div className="products">
            <h2>Fonts</h2>
                <Product name="Font 1" description="A classic serif font suitable for formal documents and invitations." />
                <Product name="Font 2" description="A modern sans-serif font perfect for digital interfaces and websites." />
                <Product name="Font 3" description="An elegant script font ideal for branding and decorative purposes." />
            {/* Add more Product components here for additional fonts */}
        </div>
      </div>
      
    </div>
</div>
    )
}

export default HomePage;