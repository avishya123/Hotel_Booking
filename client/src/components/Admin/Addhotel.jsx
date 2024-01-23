import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddHotel() {
    const [hotelname, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const [location, setLocation] = useState('');
    const [manager, setManager] = useState('');
    const [email, setEmail] = useState('');
    const [totalroom, setTotalroom] = useState('');
    const [price, setPrice] = useState('');
    const [street, setStreet] = useState('');
    const [pincode, setPincode] = useState('');
    const [file1, setFile1] = useState(null);
    const [status, setStatus] = useState('');
    const [rating, setRating] = useState('');

    const navigate = useNavigate()

    const handleAdd = async () => {
        const formData = new FormData();
        formData.append('hotelname', hotelname);
        formData.append('location', location);
        formData.append('discription', discription);
        formData.append('email', email);
        formData.append('totalroom', totalroom);
        formData.append('manager', manager);
        formData.append('price', price);
        formData.append('street', street);
        formData.append('pincode', pincode);
        formData.append('status', status);
        formData.append('rating', rating);
        formData.append('file1', file1);

        try {
            const result = await axios.post("http://localhost:3000/api/hotels/addhotels", formData);
            console.log(result);
            navigate('/showhotels')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <table>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder='Hotel Name' onChange={(e) => setName(e.target.value)} /></td>
                        <td><input type="text" placeholder='Discription' onChange={(e) => setDiscription(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Manager' onChange={(e) => setManager(e.target.value)} /></td>
                        <td><input type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} /></td>
                        <td><input type="text" placeholder='Street' onChange={(e) => setStreet(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Pincode' onChange={(e) => setPincode(e.target.value)} /></td>
                        <td><input type="text" placeholder='Price per day' onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Total rooms' onChange={(e) => setTotalroom(e.target.value)} /></td>
                        <td><input type="file" placeholder='File1' onChange={(e) => setFile1(e.target.files[0])} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Status' onChange={(e) => setStatus(e.target.value)} /></td>
                        <td><input type="text" placeholder='Rating' onChange={(e) => setRating(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={handleAdd}> Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
