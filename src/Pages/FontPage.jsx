import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import exampleImage from '../assets/Images/sample.jpg';
import './FontPage.css';

function FontCard({ fontImageUrl, title, description, paragraph }) {
    return (
        <div className="font-card">
            <div className="font-img">
                <img src={fontImageUrl} alt="font" className="fontimg" />
                <div className="overlay"></div> {/* Add overlay for shade and blur effect */}
            </div>
            <div className="font-info">
                <h2 className="font-card-title">{title}</h2>
                <div className="font-text">
                    <p className="font-description">{description}</p>
                    <p className="font-paragraph">{paragraph}</p>
                </div>
                <button className="download-btn">Download</button>
            </div>
        </div>
    );
}

function FontPage() {
    return (
        <div className="font-page">
            <Navbar />
            <header className="header">
                <h1>ChromaCraft Fonts & Themes Store</h1>
                <p>Your one-stop destination for high-quality fonts and themes.</p>
                <img src={exampleImage} alt="sample" className='example-image' />
            </header>
            <div className="card-container">
                <div className="topic">Choose your font</div>
                {/* Font cards with info and paragraph */}
                <FontCard 
                    fontImageUrl={exampleImage} 
                    title={"First Font"} 
                    description={"This is a brief description of the font."} 
                    paragraph={"San Francisco is an Apple designed typeface that provides a consistent, legible, and friendly typographic voice. Across all Apple products, the size-specific outlines and dynamic tracking ensure optimal legibility at every point size and screen resolution. Numbers have proportional widths by default, so they feel harmonious and naturally spaced within the time and data-centric interfaces people use every day. Nine weights, including italics — and features like small caps, fractions, inferior and superior numerals, indices, arrows, and more — offer breadth and depth for precision typesetting. San Francisco also adapts intelligently to different contexts."} 
                />
                <FontCard 
                    fontImageUrl={exampleImage} 
                    title={"Second Font"} 
                    description={"This is a brief description of the font."} 
                    paragraph={"Helvetica is a widely used sans-serif typeface developed in 1957 by Swiss typeface designer Max Miedinger with input from Eduard Hoffmann. It is a neo-grotesque or realist design, one influenced by the famous 19th century typeface Akzidenz-Grotesk and other German and Swiss designs. It has become a standard typeface in many areas including corporate logos, signage, and advertising, and is also commonly used in the design of books and magazines."} 
                />
                <FontCard 
                    fontImageUrl={exampleImage} 
                    title={"Third Font"} 
                    description={"This is a brief description of the font."} 
                    paragraph={"Times New Roman is a serif typeface commissioned by the British newspaper The Times in 1931 and created by Victor Lardent in collaboration with the British branch of the printing equipment company Monotype. It was commissioned by Stanley Morison, the artistic advisor to The Times, who wanted a typeface that would be easy to read quickly and would save space. The font was designed for use in the newspaper’s columns, which were narrower than usual at the time."} 
                />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default FontPage;