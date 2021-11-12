import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
// import useDestinations from '../../Hooks/useDestinations/useDestinations';
// import DestinationsItem from '../Item/DestinationsItem';
import useDestinations from '../../Hooks/useDestinarions/useDestinations';
import aboutImg from './../../Images/aboutImg.png';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import DestinationsItem from '../Item/DestinationsItem';

const Home = () => {
    const { services } = useServices();
    const [destinations] = useDestinations()
    const newDestinations = destinations.slice(0, 6)

    /* Icon */
    const checkIcon = <FontAwesomeIcon icon={faCheckSquare} />

    return (
        <div>
            <div className="mb-5">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider-3_57764d19-02cc-428d-9d38-e9c6295cc5b4.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="fw-bold text-secondary">
                            <p>The Stone Series</p>
                            <h1>Great Leather Collection</h1>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider-2_f7becb67-5722-4f24-810d-d8ad5fa7483e.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="fw-bold text-secondary">
                            <p>Nice Top Series</p>
                            <h1>Black Great Addition</h1>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider--2_3ca1d7af-a201-4c0c-840c-337a9aa591df.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className="fw-bold text-secondary">
                            <p>The Stone Series</p>
                            <h1>A Great Addition</h1>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">OUR COLLECTION</h1>
                    <p>Enjoy our Cheap Holiday packages and create your own most memorable moment and a <br /> trip to remember with Travel Time with your loved ones.</p>
                </div>
                <div className="container">
                    <Row xs={1} md={4} className="g-5 mb-5 p-4">
                        {
                            services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                        }
                    </Row>
                </div>
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">A Unique Watch that <br /> Fits Your Style</h1>
                    <p>Your watch and strap should go together perfectly, <br /> but that doesn't mean you can't experiment with different combinations.</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 mx-auto">
                    <div className="col front-icon">
                        <h2 className="mt-5 text-danger">A New Look for your Watch</h2>
                        <p className="mt-3">The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving</p>
                        {/* <h5 className="mt-5"><span>{checkIcon}</span> Invest in your simply neighborhood</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> Support people in free text extreme need</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> Largest global industrial business community</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> We understand and appreciate what’s on the line</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> To ensure your funds are protected, Tour Time</h5> */}
                    </div>
                    <div className=" mb-5 tour-plan col text-lg-end  front-icon">
                        <img className="img-fluid" width="600" src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-3.jpg" alt="" />
                    </div>
                </div>
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Destinations</h1>
                    <p>There are three basic forms of tourism: domestic tourism,  inbound tourism, and outbound tourism. <br /> Domestic tourism refers to activities of a visitor within their country of residence and outside of their home.</p>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            newDestinations.map(destination => <DestinationsItem key={destination.id} destination={destination}></DestinationsItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;