import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Showrooms() {
    const [users, setUsers] = useState([]);
    const [image, setImage] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:3000/api/rooms/showrooms')
        .then(result => {
          setUsers(result.data);
          const images = result.data.reduce((acc, room) => {
            acc[room._id] = room.rooms;
            return acc;
          }, {});
          setImage(images);
        })
        .catch(err => console.log(err));
    }, []);
    return (
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={5} style={{ backgroundColor: '#ffd43b', height: '50px' }}>
                  <center>Rooms With Hotel Names</center>
                </th>
              </tr>
              <tr style={{border:'2px solid black',textAlign:'center'}}>
                <th>Hotel Name</th>
                <th>Room</th>
                <th>Status</th>
                <th>Price</th>
                <th>Discription</th>
              </tr>
            </thead>
            <tbody style={{border:'2px solid black'}}>
              {users.map((user) => (
                <tr key={user._id}>
                  <td style={{border:'2px solid black'}}>{user.hotelname}</td>
                  <td style={{border:'2px solid black'}}>
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
                  <td style={{border:'2px solid black'}}>{user.status}</td>
                  <td style={{border:'2px solid black'}}>{user.price}</td>
                  <td style={{border:'2px solid black'}}>{user.disp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

