import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import exampleImage from '../assets/Images/sample.jpg';
import './ThemePage.css';


function ThemeCard({ themeImageUrl, title, description, paragraph }) {
    return (
        <div className="themecard">
            <div className="theme-img">
                <img src={themeImageUrl} alt="theme" className="themeimg" />
                <div className="overlay"></div> {/* Add overlay for shade and blur effect */}
            </div>
            <div className="theme-info">
                <h2 className="themecard-title">{title}</h2>
                <div className="theme-text">
                    <p className="theme-description">{description}</p>
                    <p className="theme-paragraph">{paragraph}</p>
                </div>
                <button className="download-btn">Download</button>
            </div>
        </div>
    );
}

function ThemePage() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>ChromaCraft Fonts & Themes Store</h1>
                <p>Your one-stop destination for high-quality fonts and themes.</p>
                <img src={exampleImage} alt="sample" className='example-image' />
            </header>
            <div className="cardcontainer">
                <div className="topic">Pick your own theme</div> {/* Display the topic here */}
                {/* Theme cards with info and paragraph */}
                <ThemeCard 
                    themeImageUrl={exampleImage} 
                    title={"First Theme"} 
                    description={"This is a brief description of the theme."} 
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nunc magna. Ut efficitur diam id mi tristique, sit amet aliquet metus dignissim. Sed at libero eu justo cursus eleifend. Integer aliquam neque id mi euismod, nec dignissim nisl ullamcorper. Cras non vestibulum urna. Curabitur rhoncus vel quam vel vehicula. In hac habitasse platea dictumst. Nunc id dui felis. Vestibulum sollicitudin justo in semper porttitor. Nullam ac massa ligula."} 
                />
                <ThemeCard 
                    themeImageUrl={exampleImage} 
                    title={"Second Theme"} 
                    description={"This is a brief description of the theme."} 
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nunc magna. Ut efficitur diam id mi tristique, sit amet aliquet metus dignissim. Sed at libero eu justo cursus eleifend. Integer aliquam neque id mi euismod, nec dignissim nisl ullamcorper. Cras non vestibulum urna. Curabitur rhoncus vel quam vel vehicula. In hac habitasse platea dictumst. Nunc id dui felis. Vestibulum sollicitudin justo in semper porttitor. Nullam ac massa ligula."} 
                />
                <ThemeCard 
                    themeImageUrl={exampleImage} 
                    title={"Third Theme"} 
                    description={"This is a brief description of the theme."} 
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nunc magna. Ut efficitur diam id mi tristique, sit amet aliquet metus dignissim. Sed at libero eu justo cursus eleifend. Integer aliquam neque id mi euismod, nec dignissim nisl ullamcorper. Cras non vestibulum urna. Curabitur rhoncus vel quam vel vehicula. In hac habitasse platea dictumst. Nunc id dui felis. Vestibulum sollicitudin justo in semper porttitor. Nullam ac massa ligula."} 
                />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ThemePage;