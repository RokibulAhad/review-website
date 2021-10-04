import React from 'react';
import './About.css'
import img from '../../images/pngtree-simple-abstract-ink-music-banner-image_192955.jpg'

const About = () => {
    return (
        <div className="container  ">
            <div className="row justify-content-center m-5">
            <div className="card shadow" style={{"width": "800px"}}>
                <img src={img} className="card-img-top mt-2" alt="..."/>
                <div className="card-body">
                <h2 className="text-center about">About us</h2>
                <div className="line mb-5"></div>
                    <p className="card-text">All programs cover an extreme amount of music content. They include live Q&As with guest artists & mentorships with active industry professionals.</p>
                    <p>The music industry can be intense. LA especially is known for being super competitive. But I’m proud that since we started Learn Music Hub, the collective still feels so supportive and tight. No one here is trying to be the next anyone. You’re only competing with your own potential.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
                </div>

        </div>
    );
};

export default About;
