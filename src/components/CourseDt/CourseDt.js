import React from 'react';
import './CourseDt.css'

const CourseDt = (props) => {
    const {name, img,Level,Fee,Instructor,Duration,Lessions,Quizzes,Certificate,Language} = props.courseDetails
    return (
        <div className="col-md-6 mt-4 mb-4 ">
            <div className="row  g-1">
            <div className="col">
            <div className="card img">
            <img src={img} className="card-img-top img-fluid " alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p>Level: <b>{Level}</b></p>
            <h4>Fee:  ${Fee}</h4>
            <p>Instructor:{Instructor}</p>
            <p>Duration: {Duration}</p>
            <p>Lessions: {Lessions}</p>
            <p>Quizzes: {Quizzes}</p>
            <p>Certificate: {Certificate}</p>
            <p>Language: {Language}</p>
            </div>
           </div>
           </div>  
            </div>
        </div>
    );
};

export default CourseDt;