import React from 'react'
import { LinearProgress, Box, Button } from "@mui/material";
import pic from "../../assets/done.jpg"
import "./done.css"
import { useNavigate } from 'react-router-dom';


function Done() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="done">
                <div className="nav">
                    <h1>Book now.</h1>
                </div>
                <div className="progress">
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress variant="determinate" value={70} />
                    </Box>
                </div>
                <div className="title">
                    <h1>Yay! Payment Completed</h1>
                </div>
                <div className="topics">
                    <img src={pic} />
                    <p>Please check your email & phone Message.
                        We have sent all the Informatio</p>
                    <div className="buttons">
                        <Button className="yes" onClick={() => navigate('/')}>Go to Dashboard</Button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Done