import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BookingItem from '../Item/BookingItem';

const AllBooking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const handleUpdateStatus = id => {
        const proceed = window.confirm('Are you sure, you want to update');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status update Successfully')
                        // window.location.reload
                    }
                })
        }
    }

    // Delete package
    const handleDeletePackage = id => {
        const proceed = window.confirm('Are you sure? you want to cancel package');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Package cancel successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        };
    };

    return (
        <div>
            <div className="banner-booking banner-bs mb-5 text-center">
                <h1 className="text-danger fw-bold">All Booking Details</h1>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            bookings.map(booking => <BookingItem key={booking._id} booking={booking} handleDeletePackage={handleDeletePackage} handleUpdateStatus={handleUpdateStatus}></BookingItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AllBooking;