import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import OrderItem from '../../Item/OrderItem';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://warm-spire-46407.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const handleUpdateStatus = id => {
        const proceed = window.confirm('Are you sure, you want to update');
        if (proceed) {
            const url = `https://warm-spire-46407.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Shipped' })
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

    // Delete product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure? you want to cancel product');
        if (proceed) {
            const url = `https://warm-spire-46407.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Product cancel successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        };
    };

    return (
        <div>
            <div className="banner-order banner-bs my-5 text-center">
                <h1 className="text-danger fw-bold">Manage All Orders</h1>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-3 p-4">
                        {
                            orders.map(order => <OrderItem key={order._id} order={order} handleDeleteProduct={handleDeleteProduct} handleUpdateStatus={handleUpdateStatus}></OrderItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;