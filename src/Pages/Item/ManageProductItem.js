import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProductItem = (props) => {
    const { _id, img, name, detail, price } = props.product;
    return (
        <div>
            <Col style={{border: '1px solid #DC3545', borderRadius: '5px'}}>
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger">{name}</Card.Title>
                        <div>
                            <p>{detail}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => props.handleDeleteProduct(_id)} className="btn btn-outline-danger btn-sm">
                                Delete
                            </button>
                            <h4><span className="text-danger">${price}</span></h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductItem;