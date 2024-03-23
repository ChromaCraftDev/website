import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Images/logoo.png';

export default function Navbar(){
    return <nav className="nav">
    <img src={logoImage} alt="Chromacraft Logo" className="logo" />
        <ul>
            <li>
                <Link to="/website/"> Home</Link>
                <Link to="/website/Fonts"> Fonts</Link>
                <Link to="/website/Themes"> Themes</Link>
                <Link to="/website/Download"> Download</Link>
                <Link to="/website/Ques"> Contact Us</Link>
            </li>
        </ul>
    </nav>
}