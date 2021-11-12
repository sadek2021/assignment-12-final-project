import React from 'react';
import { Row, } from 'react-bootstrap';
import useDestinations from '../../Hooks/useDestinarions/useDestinations';
// import useDestinations from '../../Hooks/useDestinations/useDestinations';
import DestinationsItem from '../Item/DestinationsItem';
import './Destinations.css'

const Destinations = () => {
    const [destinations] = useDestinations()
    return (
        <div>
            <div className="des-banner text-center">
                <div className="content text-center">
                    <h1 className="des-title fw-bold text-danger">Destinations</h1>
                    <h3 className="text-white">There are three basic forms of tourism: domestic tourism,  inbound tourism, and outbound tourism. <br /> Domestic tourism refers to activities of a visitor within their country of residence and outside of their home.</h3>
                </div>
            </div>
            <div className="container">
                <div className="container my-5">
                    <h2 className="text-danger">Popular Destination</h2>
                    <p className="text-secondary">With a world full of fascinating destinations,<br /> choosing the perfect vacation spot can present a challenge.</p>
                    <Row xs={1} md={4} className="g-3 p-3">
                        {
                            destinations.map(destination => <DestinationsItem key={destination.id} destination={destination}></DestinationsItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Destinations;