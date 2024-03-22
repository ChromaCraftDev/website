import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import exampleImage from '../assets/Images/sample.jpg';
import logoImage from '../assets/Images/logoo.png';
import './DownloadPage.css';

function DownloadPage() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>ChromaCraft for PC</h1>
                {/* Increase the size of the logo image */}
                <img src={logoImage} alt="Chromacraft Logo" className="logo" style={{ width: '400px', height: 'auto' }} />
                <p>Your one-stop destination for high-quality fonts and themes.</p>
            </header>
        
            <Footer></Footer>
        </div>
    );
}

export default DownloadPage;