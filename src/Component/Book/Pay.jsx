import React from 'react'
import { LinearProgress, Box, Button } from "@mui/material";
import "./pay.css";
import { useNavigate } from 'react-router-dom';


function Pay() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="pay">
                <div className="nav">
                    <h1>Book now.</h1>
                </div>
                <div className="progress">
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress variant="determinate" value={70} />
                    </Box>
                </div>
                <div className="title">
                    <h1>Payment</h1>
                    <p>Kindly follow the instructions below</p>
                </div>
                <div className="topics">
                    <div className="topic-dis">
                        <div className="topic-text">
                            <p >Transfer LankaStay:</p>
                            <p>2 Days at Blue Origin Fams,<br />
                                Galle, Sri Lanka</p>
                            <p>Total: $400 USD</p>
                            <p>Initial Payment: $200</p>
                        </div>
                    </div>
                    <div className="topic-detail">
                        <div className='input'>
                            <p className='input-title'>Card Number</p>
                            <input className='input-data' type="text" placeholder="Card number" />
                        </div>
                        <div className='input'>
                            <p className='input-title'>Bank</p>
                            <input className='input-data' type="text" placeholder="Select bank" />
                        </div>
                        <div className='input'>
                            <p className='input-title'>Exp Date</p>
                            <input className='input-data' type="text" placeholder="Validation date" />
                        </div>
                        <div className='input'>
                            <p className='input-title'>CVV</p>
                            <input className='input-data' type="text" placeholder="Beside the card" />
                        </div>
                        <div className="buttons">
                            <Button className="yes" onClick={() => navigate('/done')}>Pay now</Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pay