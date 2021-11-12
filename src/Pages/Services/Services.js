import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';

const Services = () => {
    const { services } = useServices();
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1 className="text-danger">Most Popular Packages</h1>
                <h5 className="text-secondary">Enjoy our Cheap Holiday packages and create your own most memorable moment and a <br /> trip to remember with Travel Time with your loved ones.</h5>
            </div>
            <div className="container my-5">
                <Row xs={1} md={4} className="g-3 p-3">
                    {
                        services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;