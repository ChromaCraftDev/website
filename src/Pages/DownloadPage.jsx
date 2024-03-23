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
            <Navbar/>
            <header>
                <div className='description-topic'>
                    <h4>Download</h4>  {<h2 className="rainbow-text">  ChromaCraft  </h2> }  <h4>for your PC</h4>
                </div>  
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
                <p>ChromaCraft offers a user-friendly platform for creating personalized wallpapers and app themes, allowing users to express their unique style effortlessly. With customizable options for color schemes, patterns, and themes, ChromaCraft transforms the desktop into a vibrant reflection of individual preferences. Whether for gamers, professionals, or enthusiasts, ChromaCraft provides a seamless solution for enhancing the aesthetics of any PC setup.</p>
            </div>
            <div class="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-item">
        <h3 class="question">Question 1: What is ChromaCraft?</h3>
        <p class="answer">ChromaCraft is a platform for high-quality fonts and themes.</p>
    </div>
    <div class="faq-item">
        <h3 class="question">Question 2: How do I download fonts from ChromaCraft?</h3>
        <p class="answer">You can download fonts from ChromaCraft by visiting the Download page and selecting the font you want to download.</p>
    </div>
</div>

            <Footer></Footer>
        </div>
    );
}

export default DownloadPage;
