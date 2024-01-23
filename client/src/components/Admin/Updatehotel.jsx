import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Updatehotel() {
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/hotels/showhotelbyid/${id}`)
      .then(res => {
        setName(res.data.hotelname);
        setDiscription(res.data.discription);
        setLocation(res.data.location);
        setManager(res.data.manager);
        setEmail(res.data.email);
        setTotalroom(res.data.totalroom);
        setPrice(res.data.price);
        setStreet(res.data.street);
        setPincode(res.data.pincode);
        setStatus(res.data.status);
        setRating(res.data.rating);
        setFile1(res.data.files && res.data.files.length > 0 ? res.data.files[0] : null);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

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

    axios.put(`http://localhost:3000/api/hotels/updatehotel/${id}`, formData)
      .then(res => {
        console.log(res);
        navigate('/showhotels');
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
         <div className="form-container">
            <table>
                <tbody>
                  <tr ><th colSpan={2} style={{backgroundColor:'#ffd43b',height:'50px'}}><center>Update Hotel</center></th></tr>
                    <tr>
                        <td><input type="text" placeholder='Hotel Name' onChange={(e) => setName(e.target.value)} value={hotelname}/></td>
                        <td><input type="text" placeholder='Discription' onChange={(e) => setDiscription(e.target.value)} value={discription}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Manager' onChange={(e) => setManager(e.target.value)} value={manager}/></td>
                        <td><input type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)} value={location}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} value={email}/></td>
                        <td><input type="text" placeholder='Street' onChange={(e) => setStreet(e.target.value)} value={street}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Pincode' onChange={(e) => setPincode(e.target.value)} value={pincode}/></td>
                        <td><input type="text" placeholder='Price per day' onChange={(e) => setPrice(e.target.value)} value={price}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Total rooms' onChange={(e) => setTotalroom(e.target.value)} value={totalroom}/></td>
                        <td><input type="file" placeholder='File1' onChange={(e) => setFile1(e.target.files[0])} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder='Status' onChange={(e) => setStatus(e.target.value)} value={status}/></td>
                        <td><input type="text" placeholder='Rating' onChange={(e) => setRating(e.target.value)} value={rating}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={handleUpdate}> Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
