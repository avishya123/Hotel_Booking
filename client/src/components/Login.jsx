import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/login', { email, password })
      .then(res => {
        if(res.data.Status === "Success"){
            if(res.data.role === "admin"){
                navigate('/admin')
            }else{
                navigate('/')
            }
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className='log'>
      <div><Navbar /></div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
        className='login'
      >
        <h2>Login</h2>
        <div>
          <TextField
            required
            id="outlined-required-email"
            label="Email"
            defaultValue=""
            type='email'
            onChange={(e) => { setEmail(e.target.value) }}
            className="custom-text-field"
          />

          <TextField
            required
            id="outlined-required-password"
            label="Password"
            defaultValue=""
            type={password ? 'text' : 'password'}
            onChange={(e) => { setPassword(e.target.value) }}
            className="custom-text-field"
          />
        </div>
        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
}
