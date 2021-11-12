import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center notFound">
            <h1><span className="text-danger">404</span> <br /> OPPS! PAGE NOT FOUND</h1>
            <p>Sorry! The page you are looking for doesn't exist</p>
        </div>
    );
};

export default NotFound;