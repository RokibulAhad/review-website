import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_color">
            <div className="container footer">
                <div className="footer_left">
                    <div>
                        <h2>Learn Music Hub</h2>
                    </div>
                    <div >
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                    <p>Feel the harmony of your  life by learning  Music</p>
                    <p>Learn Music © . All rights reserved.</p>
                </div>
                <div className="footer_midle">
                    <ul>
                        <li><Link to="/home" className="item">Home</Link></li>
                        <li><Link to="/about" className="item">About</Link></li>
                        <li><Link to="/courses-details" className="item">Course Details</Link></li>
                        <li><Link to="/blog" className="item">Blog</Link></li>
                    </ul>

                </div>
                <div className="footer_right">
                    <h3>Want Our Newsletter</h3>
                    <input type="email" placeholder="Email"  />
                    <div className="contact d-flex justify-content-center m-3 align-items-center">
                    <i class="fas fa-phone"></i>
                    <p className="m-0">+1 8 800 555 35 35</p>                    
                    </div>
                    <address>160 Broadway, New York, NY 10038,
                        102 1st Avenue, New York, NY 100</address>
                </div>
                
                
            </div>
            
        </div>
    );
};

export default Footer;