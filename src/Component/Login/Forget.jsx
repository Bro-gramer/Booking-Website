import React from 'react';
import { Button } from '@mui/material';
import "./forget.css";

import { useNavigate } from 'react-router-dom';


function Forget() {

    const navigate = useNavigate()
    return (
        <div className='forget'>
            <div className='form-2'>

                <div className='sub-title'>
                    <h1>Forget Password</h1>
                </div>
                <div className='input'>
                    <p className='input-title'>E-mail</p>
                    <input className='input-data' type="email" placeholder="Username" />
                </div>
                <div className='buttons'>
                    <Button variant="contained" onClick={() => navigate('/login')}>Get Code</Button>
                </div>
            </div>
        </div>
    );
}

export default Forget;