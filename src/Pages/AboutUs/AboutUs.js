import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import image from './../../Images/medicare.png'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="mb-5 about-banner text-center">
                <h1 className="about-title fw-bold text-danger">ABOUT US</h1>
                <h5 className="text-white">Your watch and strap should go together perfectly, but that doesn't mean you can't experiment with different combinations.</h5>
            </div>
            <div className="container-fluid">

                <div className="d-lg-flex align-items-center my-5">
                    <div className="m-5 col-lg-6">
                        <h1 className=" fw-bold">WELCOME TO <span className="text-danger">TIMEKEEPER</span></h1>
                        <br />
                        <h5 className="mb-5">Luxury watches are destined never to go out of fashion. Even though we now have clocks on our phones, nothing beats the exceptional elegance of a beautifully crafted timepiece.</h5>
                        <p>The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
                    </div>
                    <div className="col-lg-6 about-us">
                        <img className="img-fluid" width="600" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;