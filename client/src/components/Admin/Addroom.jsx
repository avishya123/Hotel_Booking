import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addroom() {
    const [hotelname, setName] = useState();
    const [rooms, setRooms] = useState();
    const [status, setStatus] = useState();
    const [price, setPrice] = useState();
    const [disp, setDisp] = useState();

    const navigate = useNavigate();

    const handleAdd = () => {
        const formData = new FormData();
        formData.append('hotelname', hotelname);
        formData.append('rooms', rooms);
        formData.append('status', status);
        formData.append('price', price);
        formData.append('disp', disp);

        axios.post('http://localhost:3000/api/rooms/addrooms', formData)
            .then(res => {
                console.log(res);
                navigate('/showrooms');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <table style={{ border: '1px solid black', fontSize: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#ffd43b', height: '50px' }} colSpan={2}>
                            <center>Add Rooms</center>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder='Hotel Name' onChange={(e) => setName(e.target.value)} /></td>
                        <td><input type="file" onChange={(e) => setRooms(e.target.files[0])} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Status' onChange={(e) => setStatus(e.target.value)} /></td>
                        <td><input type="text" placeholder='Price per day' onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="text" placeholder='Description' onChange={(e) => setDisp(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><center><button className='button' onClick={handleAdd}>Add Room</button></center></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
