import React from 'react';
import { Button } from '@mui/material';
import "./create.css";

import { useNavigate } from 'react-router-dom';


function Create() {
    const navigate = useNavigate()

    return (
        <div className='create'>

            <div className='form-2'>
                <div className='sub-title'>
                    <h1>Create Account</h1>
                </div>
                <div className='input'>
                    <p className='input-title'>Name</p>
                    <input className='input-data' type="text" placeholder="Enter your name" />
                </div>
                <div className='input'>
                    <p className='input-title'>E mail</p>
                    <input className='input-data' type="text" placeholder="name@gmail.com" />
                </div>
                <div className='input'>
                    <p className='input-title'>Phone no</p>
                    <input className='input-data' type="text" placeholder="With Country Code" />
                </div>
                <div className='input'>
                    <p className='input-title'>Country</p>
                    <input className='input-data' type="text" placeholder="Country Name" />
                </div>
                <div className='input'>
                    <p className='input-title'>Username</p>
                    <input className='input-data' type="text" placeholder="Username" />
                </div>
                <div className='input'>
                    <p className='input-title'>Password</p>
                    <input className='input-data' type="text" placeholder="6+ characters" />
                </div>
                <div className='input'>
                    <p className='input-title'>Confirm Password</p>
                    <input className='input-data' type="text" placeholder="confirm password" />
                </div>
                <div className='buttons'>
                    <Button variant="contained" onClick={() => navigate('/')}>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Create;