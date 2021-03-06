import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OrderItem = (props) => {
    const { img, name, price } = props.order.product;
    const { _id, email, address, phone, status } = props.order;
    return (
        <div>
            <Col style={{border: '1px solid #DC3545', borderRadius: '5px'}}>
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold">{name}</Card.Title>
                        <div>
                            <h6>Name: {props.order.name}</h6>
                            <h6>Email: {email}</h6>
                            <h6>Address: {address}</h6>
                            <h6>Contact: {phone}</h6>
                            <h6>Status: <span className="text-danger">{status}</span></h6>
                            <h4 className="text-danger">{price}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => props.handleDeleteProduct(_id)} type="button" className="btn btn-outline-danger btn-sm">Cancel</button>
                            <button onClick={() => props.handleUpdateStatus(_id)} type="button" className="btn btn-outline-danger btn-sm">Status Update</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default OrderItem;