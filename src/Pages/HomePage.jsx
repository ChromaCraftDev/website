
import Footer from "../components/Footer";
import React from 'react';
import colorImage from '../assets/Images/colorpallatte.png';
import themeImage from '../assets/Images/themes.png';
import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from '../components/Accordion';
import './HomePage.css';
import QuestionSubmissionPage from "./QuestionSubmissionPage";
import BackToTopButton from "../components/BackToTop";


function HomePage() {
  return (
    <div>
      <div className="App">
        <header>
          <h1 className="rainbow-text">ChromaCraft</h1>
          <p>Your one-stop destination for superior customization.</p>
          <img src={colorImage} alt="Chromacraft" className="color" style={{ width: '900px', height: 'auto' }} />
          <p className="description-text">A dynamic personality for your digital world.</p>
        </header>

        <div className='about'>
          <h3 className='why?'>Why ChromaCraft ?</h3>
         <div className="aboutp"> 
         <img src={themeImage} alt="themeimage" className="themeimg"/>
          <p>Welcome to Chromacraft, where creativity meets technology to bring your digital world to life!

At Chromacraft, we're passionate about providing stunning and immersive experiences through our collection of apps and wallpapers for PC. Whether you're looking to personalize your desktop with mesmerizing wallpapers or enhance your productivity with innovative applications, Chromacraft has you covered.

Our team of talented designers and developers works tirelessly to create unique and captivating designs that inspire and delight users worldwide. We believe in pushing the boundaries of creativity and technology, constantly striving to innovate and elevate the digital experience.

With a focus on quality, performance, and user satisfaction, Chromacraft delivers exceptional products that exceed expectations. Join us on a journey of endless possibilities and let Chromacraft transform your digital world into a vibrant and dynamic playground.

Experience the magic of Chromacraft today and unlock a world of endless creativity and inspiration!</p>
        </div>
        </div>

        <div className='description-topic'>
          <h4>Download</h4>  {<h2 className="rainbow-text">  ChromaCraft  </h2>}  <h4>for your PC</h4>
        </div>

        <div className="download-cards">
          <div className="card">
            <FontAwesomeIcon icon={faWindows} className="card-icon" />
            <div className="card-body">
              <h5 className="card-title">Windows</h5>
              <a href="https://drive.google.com/uc?export=download&id=1trZvnMRTLCdfEmNozlm4ywo7tSgEEcDP" className="download-link">Download for Windows</a>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faLinux} className="card-icon" />
            <div className="card-body">
              <h5 className="card-title">Linux</h5>
              <a href="https://dl.patchkit.net/d/6dn28ws97jqq0sh2ta5g1/direct" className="download-link">Download for Linux</a>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faApple} className="card-icon" />
            <div className="card-body">
              <h5 className="card-title">MacOS</h5>
              <a href="#" className="download-link">Coming soon</a>
            </div>
          </div>
        </div>

        <div className='supported-apps'>
          <h3 className='apps'>Supporting apps</h3>
          <ul>
              <li><a href="https://code.visualstudio.com/download">Vs Code</a></li>
              <li><a href="https://www.jetbrains.com/idea/download/">Intellij</a></li>
              <li><a href="https://discord.com/download/">Discord</a></li>
          </ul>
        </div>


        <Accordion/>

        <QuestionSubmissionPage/>
        <BackToTopButton/>
      
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default HomePage;