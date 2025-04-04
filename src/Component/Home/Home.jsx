import React, { useRef } from 'react'
import main from '../../assets/main.jpg'

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import slide5 from '../../assets/slide5.png';
import slide6 from '../../assets/slide6.png';
import slide7 from '../../assets/slide7.png';
import slide8 from '../../assets/slide8.png';

import { useNavigate } from 'react-router-dom';

import "./home.css";

function Home() {

    const refreshPage = () => {
        window.location.reload();
    };

    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const navigate = useNavigate()
    return (
        <div className='home'>


            <div className="nav">
                <div className="left">
                    <p className="logo" onClick={refreshPage}>Book now</p>
                </div>

                <div className="center">
                    <p onClick={refreshPage}>Home</p>
                    <p onClick={() => navigate('/detail')}>Hotels</p>
                    <p onClick={scrollToFooter}>About</p>
                </div>

                <div className="right">
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>

            <div className='topic'>

                <div className="text-content">
                    <h1>Forget Busy Work, Start Next Vacation</h1>
                    <p>
                        We provide what you need to enjoy your holiday with family.<br />
                        Time to make another memorable moment.
                    </p>


                    <div className="stats">

                        <p>2500 users</p>
                        <p>200 treasure</p>
                        <p>100 cities</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={main} alt="Vacation" />
                </div>

            </div >
            <div className="break">
                <p>Most Picked</p>
            </div>

            <div>
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


                <div className="bottom-slide">
                    <div className="slide">
                        <img src={slide5} alt="Boutique" className="slide-img" />
                        <p className="slide-title">Boutique</p>
                        <p className="slide-Subtitle">Kandy, Sri Lanka</p>
                    </div>

                    <div className="slide">
                        <img src={slide6} alt="Modern" className="slide-img" />
                        <p className="slide-title">Modern</p>
                        <p className="slide-Subtitle">Nuwereliya, Sri Lanka</p>
                    </div>

                    <div className="slide">
                        <img src={slide7} alt="Silver Rain" className="slide-img" />
                        <p className="slide-title">Silver Rain</p>
                        <p className="slide-Subtitle">Dehiwala, Sri Lanka</p>
                    </div>

                    <div className="slide">
                        <img src={slide8} alt="Cashville" className="slide-img" />
                        <p className="slide-title">Cashville</p>
                        <p className="slide-Subtitle">Ampara, Sri Lanka</p>
                    </div>
                </div>
            </div>

            <div className="footer" ref={footerRef}>
                <div className="footer-text">
                    <p className="logo">Book now</p>
                    <p>We make your beautiful holiday unforgettable and instant.</p>
                </div>
                <div className="footer-button">
                    <p>Become hotel Owner</p>
                    <button onClick={() => navigate('/create')} > Register now</button>
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
        </div >

    )
}

export default Home