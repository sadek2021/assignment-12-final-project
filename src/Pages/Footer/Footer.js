import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" footer bg-danger align-items-center ">
            <div className="mb-4">
                <img width="150" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper_150x.png"className="mx-auto d-block" alt="" />
            </div>
            <div>
                <p className="text-white text-center m-0">Copyright © 2021 All rights reserved Timekeeper.</p>
            </div>
        </div>
    );
};

export default Footer;