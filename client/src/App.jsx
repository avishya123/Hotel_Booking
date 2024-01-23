import React from 'react'
import Register from './components/Register'
import './components/Style.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admindashboard from './components/Admin/Admindashboard';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Addhotel from './components/Admin/Addhotel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showhotels from './components/Admin/Showhotels';
import Updatehotel from './components/Admin/Updatehotel';
import Userdashboard from './components/User/Userdashboard';
import Addroom from './components/Admin/Addroom';
import Showrooms from './components/Admin/Showrooms';
import Addfacility from './components/Admin/Addfacility'
import Showfacility from './components/Admin/Showfacility';
import Hoteloffer from './components/User/Hoteloffer';
import About from './components/User/About';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Userdashboard/>} />
          <Route path='/nav' element={<Navbar/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admindashboard/>} />
          <Route path="/addhotel" element={<Addhotel/>} />
          <Route path="/showhotels" element={<Showhotels/>} />
          <Route path="/updatehotelbyid/:id" element={<Updatehotel/>} />
          <Route path="/addrooms" element={<Addroom/>} />
          <Route path="/showrooms" element={<Showrooms/>} />
          <Route path="/addfacility" element={<Addfacility/>} />
          <Route path="/showfacility" element={<Showfacility/>} />
          <Route path="/offer" element={<Hoteloffer/>} />
          <Route path="/about" element={<About/>} />


          
        </Routes>
      </Router>
    </>
  )
}

export default App
