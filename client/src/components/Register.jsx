import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', { username, email, password, number, gender, street, city, pincode })
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
  };
    return (
      <div className='regis'>
        <div><Navbar/></div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
        className='register'
      >
        <h2>Register</h2>
         <div style={{display:'flex'}}>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          placeholder="User Name"
          onChange={(e) => setName(e.target.value)}
          className="custom-text-field"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Email"
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          className="custom-text-field"
        />
        </div>
        <div style={{display:'flex'}}>
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Password"
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          className="custom-text-field"
        />
        <TextField
          required
          id="outlined-required"
          label="Contact Number"
          placeholder="Contact Number"
          onChange={(e) => setNumber(e.target.value)}
          className="custom-text-field"
        />
         </div>
         <div style={{display:'flex'}}>
         <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio className="custom-radio"/>} label="Female" />
        <FormControlLabel value="male" control={<Radio className="custom-radio"/>} label="Male" />
        <FormControlLabel value="other" control={<Radio className="custom-radio"/>} label="Other" />
      </RadioGroup>
    </FormControl>
    <TextField
          required
          id="outlined-required"
          label="Street"
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
          className="custom-text-field"
        />
         </div>
         <div style={{display:'flex'}}>
         <TextField
          required
          id="outlined-required"
          label="City"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          className="custom-text-field"
        /><TextField
        required
        id="outlined-required"
        label="Pincode"
        placeholder="Pin Code"
        onChange={(e) => setPincode(e.target.value)}
        className="custom-text-field"
      />
         </div>
         <div><p>Already Registered ? <Link to={'/login'} style={{color:'white'}}>login</Link></p></div>
         <div>
      <Button variant="contained" onClick={handleSubmit}>Register</Button>
         </div>
    </Box>
    </div>
  );
}