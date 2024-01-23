import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Showhotels() {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/hotels/showhotels")
      .then(result => {
        console.log("API Response:", result.data);
        setUsers(result.data);
        const images = result.data.reduce((acc, hotel) => {
          acc[hotel._id] = hotel.image1;
          return acc;
        }, {});
        setImage(images);
      })
      .catch(err => {
        console.error("API Error:", err);
        setError("Error fetching data");
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/hotels/deletehotel/${id}`)
      .then(res => {
        console.log("Delete Response:", res);
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
      })
      .catch(err => console.error("Delete Error:", err));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p-3'>
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th colSpan={15} style={{ backgroundColor: '#FFD43B',height:'50px' }}> <center><h2>HOTELS</h2></center></th>
          </tr>
          <tr>
            <th></th>
            <th>HOTEL NAME</th>
            <th>DESCRIPTION</th>
            <th>LOCATION</th>
            <th>MANAGER</th>
            <th>EMAIL ID</th>
            <th>TOTAL ROOMS</th>
            <th>PRICE</th>
            <th>STREET</th>
            <th>PINCODE</th>
            <th>IMAGE</th>
            <th>STATUS</th>
            <th>RATING</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.hotelname}</td>
              <td>{user.discription}</td>
              <td>{user.location}</td>
              <td>{user.manager}</td>
              <td>{user.email}</td>
              <td>{user.totalroom}</td>
              <td>{user.price}</td>
              <td>{user.street}</td>
              <td>{user.pincode}</td>
              <td>
              {image && image[user._id] ? (
  <img
    style={{ height: '200px', width: '270px' }}
    src={`http://localhost:3000/images/${image[user._id]}`}
    alt="Uploaded"
    onError={(e) => {
      console.error('Image failed to load:', e);
    }}
  />
) : (
  <span>No Image</span>
)}

              </td>
              <td>{user.status}</td>
              <td>{user.rating}</td>
              <td>
                <button
                  style={{ color: '#FFD43B' }}
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
              <td>
              <Link to={`/updatehotelbyid/${user._id}`} style={{ color: '#FFD43B' }}>
    <button>Edit</button>
  </Link>
              </td>
            </tr>
          ))}
           <tr>
              <td colSpan={15}> <center> <Link to={'/addhotel'} style={{color: '#FFD43B'}}>Add Hotels</Link></center></td>
            </tr>
        </tbody>
      </Table>
    </div>
  );
}
