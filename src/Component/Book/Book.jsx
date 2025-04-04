import { LinearProgress, Box, Button } from "@mui/material";
import "./book.css";
import React from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import hotel1 from "../../assets/hotel1.jpg";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    return (
        <div className="book">
            <div className="nav">
                <h1>Book now.</h1>
            </div>
            <div className="progress">
                <Box sx={{ width: "100%" }}>
                    <LinearProgress variant="determinate" value={70} />
                </Box>
            </div>
            <div className="title">
                <h1>Booking Information</h1>
                <p>Please fill up the blank fields below</p>
            </div>
            <div className="topics">
                <div className="topic-dis">
                    <img src={hotel1} alt="Vacation" className="topic-img" />
                    <div className="topic-text">
                        <p className="img-title">Blue Origin Fams</p>
                        <p className="img-subtitle">Galle, Sri Lanka</p>
                    </div>
                </div>
                <div className="topic-detail">
                    <div className="detail-stock">
                        <p>How long you will stay?</p>
                        <QuantitySelector stock={10} />
                    </div>
                    <div className="detail-calendar">
                        <p>Pick a Date</p>
                        <Calendar />
                    </div>
                    <div className="detail-price">
                        <p>You will pay $400 USD</p>
                        <p>per 2 Days</p>
                    </div>
                    <div className="buttons">
                        <Button className="yes" onClick={() => navigate('/pay')}>Book now</Button>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
