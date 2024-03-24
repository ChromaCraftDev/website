import './BackToTop.css';
import { useEffect, useState } from "react";

function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="Topbutton">

        {backToTopButton && (
            <button style={{
                position: 'fixed',
                bottom: '50px',
                right: "30px",
                height: "50px",
                width: "50px",
                fontSize: "40px",
                
            }}
                onClick={scrollup} className="button">^</button>
        )}

    </div>

}

export default BackToTopButton;