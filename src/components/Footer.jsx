import './Footer.css'

export default function Footer(){
    return (   
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Team ChromaCraft</h3>
                    <ul>
                    <li>Thanuga Rodrigo</li>
                    <li>Kavindu Ashain</li>
                    <li>Sandew Hiruditha</li>
                    <li>Eshan Vithanage</li>
                    <li>Sehandu Malawaraarachchi</li>
                    </ul>
                </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <ul>
                <li>Email: info@chromacraft.com</li>
                <li>Phone: +94 46 330 3629</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <ul className="social-links">
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            </div>
            <p className="copyright">&copy; 2024 ChromaCraft Fonts & Themes Store. All rights reserved.</p>
    </footer>
  )
}