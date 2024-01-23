import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ShowFacility() {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/facilities/showfacility')
            .then(result => {
                setFacilities(result.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{paddingTop:'100px'}}>
            {facilities.map((facility) => (
                <div key={facility._id}>
                    <div>{facility.hotelname}</div>
                    <div>
                        {facility.facilities.map((item, index) => (
                            <span key={index}>{item},</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
