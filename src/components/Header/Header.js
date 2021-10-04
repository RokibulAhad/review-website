import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar pt-4 pb-4 navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">Learn Music Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>                    
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>                                       
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/courses-details">Courses Details</Link>
                    </li>  
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                    </li>                   
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn card_button " type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;