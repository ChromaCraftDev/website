import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import colorImage from '../assets/Images/colorpallatte.png';
import './DownloadPage.css';

function DownloadPage() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>ChromaCraft for PC</h1>
                {/* Increase the size of the logo image */}
                <img src={colorImage} alt="Chromacraft" className="color" style={{ width: '900px', height: 'auto' }} />
                <p>Your one-stop destination for high-quality fonts and themes.</p>
            </header>
        
            <Footer></Footer>
        </div>
    );
}

export default DownloadPage;