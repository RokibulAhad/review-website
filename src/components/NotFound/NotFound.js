import React from 'react';
import './NotFound.css'
import img from "../../images/404-error.jpg.crdownload"

const NotFound = () => {
    return (
        <div className="text-center">
            <h2 className="mt-4 mb-0">We Are Sorry.Page not found</h2>
            <img src={img} alt="" />
            
        </div>
    );
};

export default NotFound;