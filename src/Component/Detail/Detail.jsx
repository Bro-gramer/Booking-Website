import React, { useRef } from 'react'
import "./detail.css";

import main from '../../assets/hotel2.jpg'
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';


import { useNavigate } from 'react-router-dom';


function Detail() {

    const refreshPage = () => {
        window.location.reload();
    };

    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const navigate = useNavigate()

    return (
        <div className='detail'>

            <div className="nav">
                <div className="left">
                    <p className="logo" onClick={refreshPage}>Book now</p>
                </div>

                <div className="center">
                    <p onClick={() => navigate('/')}>Home</p>
                    <p onClick={refreshPage}>Hotels</p>
                    <p onClick={scrollToFooter}>About</p>
                </div>

                <div className="right">
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
            <div className='path-container'>
                <p>
                    <a onClick={() => navigate('/')}>Home</a> / Home Detail
                </p>
            </div>
            <div className='title'>
                <h1> Blue Origin Fams</h1>
                <p>Galle, Sri Lanka</p>
            </div>
            <div className='img-column'>
                <img src={main} alt="Vacation" />
            </div>
            <div className='text-container'>
                <div className='topic'>
                    <h1>About the place</h1>
                    <p>
                        Minimal techno is a minimalist subgenre of techno music.
                        It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development.
                        Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.
                        <br />
                        <br />
                        Such trends saw the demise of the soul-infused techno that typified the original Detroit sound.
                        Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
                    </p>
                </div>
                <div className='Cards'>
                    <p className='title'>Start Booking</p>
                    <p className='sub-title'>$200 per Day</p>
                    <button onClick={() => navigate('/book')}>Book Now!</button>
                </div>
            </div>
            <div className='break'>
                <p>Treasure to Choose</p>
            </div>
            <div className="top-slide">
                <div className="slide">
                    <img src={slide1} alt="Shangri-La" className="slide-img" />
                    <p className="slide-title">Shangri-La</p>
                    <p className="slide-Subtitle">Colombo, Sri Lanka</p>
                </div>

                <div className="slide">
                    <img src={slide2} alt="Top View" className="slide-img" />
                    <p className="slide-title">Top View</p>
                    <p className="slide-Subtitle">Hikkaduwe, Sri Lanka</p>
                </div>

                <div className="slide">
                    <img src={slide3} alt="Green Villa" className="slide-img" />
                    <p className="slide-title">Green Villa</p>
                    <p className="slide-Subtitle">Kandy, Sri Lanka</p>
                </div>

                <div className="slide">
                    <img src={slide4} alt="Wooden Pit" className="slide-img" />
                    <p className="slide-title">Wooden Pit</p>
                    <p className="slide-Subtitle">Ambalangode, Sri Lanka</p>
                </div>
            </div>
            <div className="footer" ref={footerRef}>
                <div className="footer-text">
                    <p className="logo">Book now</p>
                    <p>We make your beautiful holiday unforgettable and instant.</p>
                </div>
                <div className="footer-button">
                    <p>Become hotel Owner</p>
                    <button onClick={() => navigate('/create')}>Register now</button>
                </div>
                <div className="copyright">
                    <p>
                        Copyright 2025 • All rights reserved •
                        <a href="https://bemnet.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Bemnet Yitagesu
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail