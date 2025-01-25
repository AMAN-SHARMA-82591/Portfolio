import React, { useEffect, useState } from 'react'
// import { Link } from 'react-scroll';
import './App.css';

function Navbar({ handleClick }) {

    const [windowScroll, setWindowScroll] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 90) {
            setWindowScroll(true);
        } else {
            setWindowScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, []);
    return (
        <nav className={windowScroll ? 'navbar-section active' : 'navbar-section'}>
            <div className="nav-link-main">
                <h1 className="main-logo">
                    Aman Sharma
                </h1>

                <div className="main-sections">
                    <ul className="ul-section">
                        <li onClick={handleClick} className="main-multiple-sec-container">
                            {/* <Link to='home' spy={true} smooth={true} offset={50} duration={500}>Home</Link> */}
                            a
                        </li>
                        <li onClick={handleClick} className="main-multiple-sec-container">
                            {/* <Link to='about' spy={true} smooth={true} offset={-110} duration={500}>About</Link> */}
                            b
                        </li>
                        <li onClick={handleClick} className="main-multiple-sec-container">
                            {/* <Link to='contact' spy={true} smooth={true} offset={-90} duration={500}>Contact</Link> */}
                            c
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
