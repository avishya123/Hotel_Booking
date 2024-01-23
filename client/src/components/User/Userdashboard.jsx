import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import Hoteloffer from './Hoteloffer'
import About from './About'

export default function Userdashboard() {
  return (
    <div  className='user'> 
    <Navbar/>
    <h1 style={{paddingLeft:'120px',marginTop:'150px'}} className='h1'>A Lifetime of discounts ? It's Genious.</h1>
    <div className='first' style={{ color: 'white', paddingTop: '60px', marginTop: '0',padding:'120px' }}>
        <p style={{fontSize:'25px'}} className='para'><b>Get rewarded for your Travels - unlock instant savings of 10% or more with a free Revish hotels.com booking account</b></p><br />
       <Link to={'/register'}><button style={{fontSize:'25px'}} className='button'>Sign in/Register</button></Link> 
      </div>
      <div style={{display:'flex',paddingTop:'20px',width:'auto'}} className='search'>
        <label htmlFor="">Search Location
        <input type="search" style={{border:'none',width:'40vw'}}/></label>
        <label htmlFor="">Check In
        <input type="date" style={{border:'none',width:'30vw'}} /></label>
        <label htmlFor="">Check Out
        <input type="date" style={{border:'none',width:'30vw'}}/></label>
      </div><br />
      <div>
        {/* <Hoteloffer/> */}
        <About/>
      </div>
    </div>

  )
}
