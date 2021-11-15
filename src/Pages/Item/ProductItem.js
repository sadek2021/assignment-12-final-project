import React from 'react';
import './ProductItem.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const { _id, img, name, detail, price } = props.product;
    return (
        <div>
            <Col className="shadow-lg">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold">{name}</Card.Title>
                        <div>
                            <small>{detail}</small>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Link to={`/orders/${_id}`}>
                                <button type="button" className="btn btn-outline-danger btn-sm">Buy Now</button>
                            </Link>
                            <small className="text-danger">${price}</small>
                        </div>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default ProductItem;