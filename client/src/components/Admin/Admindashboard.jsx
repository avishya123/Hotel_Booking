import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import AddHotel from './Addhotel'
import Showhotels from './Showhotels'
import Addroom from './Addroom'
import Showrooms from './Showrooms'
import AddFacility from './Addfacility'
import ShowFacility from './Showfacility'

export default function Admindashboard() {
  const navigate = useNavigate();
  const [button, setButton] = useState(null);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3000/admindashboard")
      .then(res => {
        if (res.data === "Success") {
          console.log("success");
        } else {
          navigate('/admin');
        }
      })
  }, []);

  const renderPage = () => {
    switch (button) {
      case 'Add Hotels':
        return <AddHotel />;
      case 'View Hotels':
        return <Showhotels />;
      case 'Add Rooms':
        return <Addroom />;
      case 'View Rooms':
        return <Showrooms />;
      case 'Add Facilities':
        return <AddFacility />;
      case 'View Facilities':
        return <ShowFacility />;
      
      default:
        return null;
    }
  }

  const handleButtonClick = (buttonName) => {
    setButton(buttonName);
  }

  return (
    <div>
      <div><Navbar /></div>
      <div className="parent">
        <div className="c1" style={{ padding: '20px' }}>
          <button style={{ fontSize: '30px', padding: '20px', margin: '10px', marginTop: '100px' }} onClick={() => handleButtonClick('Add Hotels')}>Add Hotels</button><br />
          <button style={{ fontSize: '30px', padding: '20px', margin: '10px' }} onClick={() => handleButtonClick('View Hotels')}>View Hotels</button><br />
          <button style={{ fontSize: '30px', padding: '20px', margin: '10px' }} onClick={() => handleButtonClick('Add Rooms')}>Add Rooms</button><br />
          <button style={{ fontSize: '30px', padding: '20px', margin: '10px' }} onClick={() => handleButtonClick('View Rooms')}>View Rooms</button><br />
          <button style={{ fontSize: '30px', padding: '20px', margin: '10px' }} onClick={() => handleButtonClick('Add Facilities')}>Add Facilities</button><br />
          <button style={{ fontSize: '30px', padding: '20px', margin: '10px' }} onClick={() => handleButtonClick('View Facilities')}>View Facilities</button><br />
        </div>
        <div className="c2">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}
