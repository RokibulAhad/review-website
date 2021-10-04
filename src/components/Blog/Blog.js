import React from 'react';
import './Blog.css'
import img1 from "../../images/3061.jpg"
import img2 from "../../images/92923-640x360-alexandra-palace-gig-640.jpg"
import img3 from "../../images/ghows-MI-201239883-e4e707ef.jpg"
import img4 from "../../images/How-Long-is-a-Concert.jpg"
import img5 from "../../images/hero.jpg";
import img6 from "../../images/black-promoters-collective.jpg"

const Blog = () => {
    return (
        <div className="container mt-4 mb-4">
            <h2 className="text-center course">Our Latest Blog</h2>
            <div className="line mb-5"></div>
            <div className="row  g-4">
                <div className="col col-md-4">
                    <div className="card card-size">
                        <img src={img1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn card_button">Read More</button>
                        </div>
                    </div>
                </div> 
                <div className="col col-md-4">
                    <div className="card card-size">
                        <img src={img2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn card_button">Read More</button>
                        </div>
                    </div>
                </div> 
                <div className="col col-md-4">
                    <div className="card card-size">
                        <img src={img3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn card_button">Read More</button>
                        </div>
                    </div>
                </div> 
                <div className="col col-md-4">
                    <div className="card card-size">
                        <img src={img4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn card_button">Read More</button>
                        </div>
                    </div>
                </div> 
                <div className="col col-md-4">
                    <div className="card card-size">
                        <img src={img5} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn card_button">Read More</button>
                        </div>
                    </div>
                </div> 
                <div className="col col-md-4">
                    <div className="card card-size">
                        <img src={img6} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn card_button">Read More</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Blog;