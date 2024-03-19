import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return <nav className="nav">
        <Link href="/" className="site-title">Site Name</Link>
        <ul>
            <li>
                <Link to="/"> Home</Link>
                <Link to="/Fonts"> Fonts</Link>
                <Link to="/Themes"> Themes</Link>
            </li>
        </ul>
    </nav>
}