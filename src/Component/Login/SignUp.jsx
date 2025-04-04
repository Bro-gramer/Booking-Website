import React from 'react';
import { Button } from '@mui/material';
import "./signup.css";

import { useNavigate } from 'react-router-dom';


function Signup() {

    const navigate = useNavigate()
    return (
        <div className='signup'>
            <div className='form-2'>

                <div className='sub-title'>
                    <h1>Welcome Back</h1>
                    <h1>Login</h1>
                </div>
                <div className='input'>
                    <p className='input-title'>Username</p>
                    <input className='input-data' type="text" placeholder="Username" />
                </div>
                <div className='input'>
                    <p className='input-title'>Password</p>
                    <input className='input-data' type="text" placeholder="password" />
                    <p className="forget-password" onClick={() => navigate('/forget')}>
                        Forget Password?
                    </p>
                </div>

                <div className='buttons'>
                    <Button variant="contained" onClick={() => navigate('/')}>Login</Button>
                    <Button variant="contained" onClick={() => navigate('/create')}>Create Account</Button>
                </div>
            </div>
        </div >
    );
}

export default Signup;