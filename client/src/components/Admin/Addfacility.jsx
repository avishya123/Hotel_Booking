import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddFacility() {
    const [hotelname, setHotelName] = useState("");
    const [facilities, setFacilities] = useState("");
    const navigate = useNavigate();

    const handleAdd = () => {
        const data = {
            hotelname: hotelname,
            facilities: facilities.split(',').map(item => item.trim()) // Split facilities into an array
        };

        axios.post('http://localhost:3000/api/facilities/addfacility', data)
            .then(res => {
                console.log(res);
                navigate('/showfacility');
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{paddingTop:'100px'}}>
            <table style={{ border: '1px solid black', fontSize: '20px' }}>
                <tbody>
                    <tr style={{ border: '1px solid black' }}>
                        <td colSpan={2} style={{ backgroundColor: '#ffd43b', height: '50px' }}>
                            <center>Add Facilities</center>
                        </td>
                    </tr>
                    <tr>
                        <td>Hotel Name</td>
                        <td>Facilities</td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Hotel Name' onChange={(e) => setHotelName(e.target.value)} /></td>
                        <td><input type="text" placeholder='Facilities (comma-separated)' onChange={(e) => setFacilities(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <center><button className='button' onClick={handleAdd}>Add Room</button></center>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
