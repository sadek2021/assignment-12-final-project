import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth/useAuth';
import MyOrderItem from '../../Item/MyOrderItem';
import './MyOrders.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { allContext } = useAuth();
    const { user } = allContext;
    // console.log(user);

    useEffect(() => {
        fetch('https://warm-spire-46407.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrder = data.filter(order => order.email === user.email);
                setOrders(myOrder)
            })
    }, [user.email])

    // Delete a Product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure, You Want To Cancel');
        if (proceed) {
            const url = `https://warm-spire-46407.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    };
                });
        };
    };
    return (
        <div>
            <div className="order-banner banner-bs mb-5 text-center">
                <h1 className="my-title text-danger fw-bold">My Orders</h1>
                <h5 className="text-black">Check your Order Details</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            orders.map(order => <MyOrderItem key={order._id} order={order} handleDeleteProduct={handleDeleteProduct}></MyOrderItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};


export default MyOrders;