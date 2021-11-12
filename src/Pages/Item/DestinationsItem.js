import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DestinationsItem = (props) => {
    const { img, name, detail } = props.destination;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold">{name}</Card.Title>
                        <div>
                            <p>{detail}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DestinationsItem;