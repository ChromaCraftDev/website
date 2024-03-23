import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import colorImage from '../assets/Images/colorpallatte.png';
import { Link } from 'react-router-dom';
/*import sampleFile from '../assets/DownloadFiles/sampleFile.pdf'; */
import './HomePage.css';


/*function Product({ name, description }) {
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

*/
function HomePage(){
    return(
<div>
    <Navbar></Navbar>
    <div className="App">
    <header>
      <h1 className="rainbow-text">ChromaCraft</h1>
      <p>Your one-stop destination for high-quality fonts and themes.</p>
      <img src={colorImage} alt="Chromacraft" className="color" style={{ width: '900px', height: 'auto' }} />
    </header>

      <div className="container">
        <Link to="/website/Themes" className="themescard">
            <h2>Themes</h2>
            {/* Add more Theme components here for additional themes */}
        </Link>
        <Link to="/website/Fonts" className="fontscard">
            <h2>Fonts</h2>
            {/* Other card content goes here */}
        </Link>
      </div>
      
    </div>
    <Footer></Footer>
</div>
    )
}

export default HomePage;