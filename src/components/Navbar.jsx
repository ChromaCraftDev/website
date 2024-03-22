import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return <nav className="nav">
        <Link href="/website/" className="site-title">Chromacraft</Link>
        <ul>
            <li>
                <Link to="/website/"> Home</Link>
                <Link to="/website/Fonts"> Fonts</Link>
                <Link to="/website/Themes"> Themes</Link>
            </li>
        </ul>
    </nav>
}