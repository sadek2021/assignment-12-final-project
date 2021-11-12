import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import MyBookingItem from '../Item/MyBookingItem';
import './MyBooking.css'

const MyBooking = () =>{
    const [bookings, setBookings] = useState([]);
    const { allContext } = useAuth();
    const { user } = allContext;
    // console.log(user);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const myBooking = data.filter(booking => booking.email === user.email);
                setBookings(myBooking)
            })
    }, [user.email])

    // Delete a Package
    const handleDeletePackage = id => {
        const proceed = window.confirm('Are You Sure, You Want To Cancel');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Package Cancel Successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    };
                });
        };
    };
    return (
        <div>
            <div className="booking-banner banner-bs mb-5 text-center">
                <h1 className="my-title text-danger fw-bold">My Bookings</h1>
                <h5 className="text-white">Check your Booking Details</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            bookings.map(booking => <MyBookingItem key={booking._id} booking={booking} handleDeletePackage={handleDeletePackage}></MyBookingItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};


export default MyBooking;