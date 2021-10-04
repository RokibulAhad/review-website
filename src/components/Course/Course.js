import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name,img,Instructor,Fee,Duration,Level} = props.course
    return (
        <div className="col-md-6">
            <div className="card shadow  mb-3" >
                <div className="row g-0 ">
                    <div className="col-md-5 card_size">
                    <img src={img} className="img-fluid card_size" alt="..."/>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Instructor:{Instructor}</p>
                        <h3 className="price">Course Fee: ${Fee}</h3>
                        <p className="m-0">Duration: {Duration}</p>
                        <div className="d-flex justify-content-between">
                        <p>Level: {Level}</p>
                        <button className="btn card_button">Join Now</button>
                        </div>
                        
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;