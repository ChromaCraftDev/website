import Navbar from "../components/Navbar";
import exampleImage from '../assets/Images/sample.jpg';
import './FontPage.css';

function Card({ fontimageurl, title, description, paragraph }) {
    return (
        <div className="fontcard">
            <div className="font-img">
                <img src={fontimageurl} alt="firstfont" className="fontimg" />
            </div>
            <div className="font-info">
                <h2 className="fontcard-title">{title}</h2>
                <p className="font-description">{description}</p>
                <p className="font-paragraph">{paragraph}</p>
                <button className="download-btn">Download</button>
            </div>
        </div>
    );
}

function FontPage() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>ChromaCraft Fonts & Themes Store</h1>
                <p>Your one-stop destination for high-quality fonts and themes.</p>
                <img src={exampleImage} alt="sample" className='example-image' />
            </header>
            <div className="cardcontainer">
                {/* Font card with info and paragraph */}
                <Card 
                    fontimageurl={exampleImage} 
                    title={"Firstfont"} 
                    description={"This is a brief description of the font."} 
                    paragraph={"San Francisco is an Apple designed typeface that provides a consistent, legible, and friendly typographic voice. Across all Apple products, the size-specific outlines and dynamic tracking ensure optimal legibility at every point size and screen resolution. Numbers have proportional widths by default, so they feel harmonious and naturally spaced within the time and data-centric interfaces people use every day. Nine weights, including italics — and features like small caps, fractions, inferior and superior numerals, indices, arrows, and more — offer breadth and depth for precision typesetting. San Francisco also adapts intelligently to different contexts. When indicating time, for example, the colon in San Francisco switches to a vertically centered form. And each operating system works with the typeface to apply size-specific font features automatically."} 
                />
                                <Card 
                    fontimageurl={exampleImage} 
                    title={"Firstfont"} 
                    description={"This is a brief description of the font."} 
                    paragraph={"San Francisco is an Apple designed typeface that provides a consistent, legible, and friendly typographic voice. Across all Apple products, the size-specific outlines and dynamic tracking ensure optimal legibility at every point size and screen resolution. Numbers have proportional widths by default, so they feel harmonious and naturally spaced within the time and data-centric interfaces people use every day. Nine weights, including italics — and features like small caps, fractions, inferior and superior numerals, indices, arrows, and more — offer breadth and depth for precision typesetting. San Francisco also adapts intelligently to different contexts. When indicating time, for example, the colon in San Francisco switches to a vertically centered form. And each operating system works with the typeface to apply size-specific font features automatically."} 
                />
                                <Card 
                    fontimageurl={exampleImage} 
                    title={"Firstfont"} 
                    description={"This is a brief description of the font."} 
                    paragraph={"San Francisco is an Apple designed typeface that provides a consistent, legible, and friendly typographic voice. Across all Apple products, the size-specific outlines and dynamic tracking ensure optimal legibility at every point size and screen resolution. Numbers have proportional widths by default, so they feel harmonious and naturally spaced within the time and data-centric interfaces people use every day. Nine weights, including italics — and features like small caps, fractions, inferior and superior numerals, indices, arrows, and more — offer breadth and depth for precision typesetting. San Francisco also adapts intelligently to different contexts. When indicating time, for example, the colon in San Francisco switches to a vertically centered form. And each operating system works with the typeface to apply size-specific font features automatically."} 
                />
            </div>
        </div>
    );
}

export default FontPage;
