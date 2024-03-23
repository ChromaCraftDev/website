import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import colorImage from '../assets/Images/colorpallatte.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
import './DownloadPage.css';

function DownloadPage() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>ChromaCraft for PC</h1>
                {/* Increase the size of the logo image */}
                <img src={colorImage} alt="Chromacraft" className="color" style={{ width: '900px', height: 'auto' }} />
                <p className="description-text">Your one-stop destination for high-quality fonts and themes.</p>
            </header>

            <div className="download-cards">
                <div className="card">
                    <FontAwesomeIcon icon={faWindows} className="card-icon" />
                    <div className="card-body">
                        <h5 className="card-title">Windows</h5>
                        <a href="windows-download-link" className="download-link">Download for Windows</a>
                    </div>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faLinux} className="card-icon" />
                    <div className="card-body">
                        <h5 className="card-title">Linux</h5>
                        <a href="linux-download-link" className="download-link">Download for Linux</a>
                    </div>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faApple} className="card-icon" />
                    <div className="card-body">
                        <h5 className="card-title">MacOS</h5>
                        <a href="macos-download-link" className="download-link">Download for MacOS</a> 
                    </div> 
                </div>
            </div>
            <div className='about'>
                <h3 className='why?'>Why ChromaCraft ?</h3>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DownloadPage;
