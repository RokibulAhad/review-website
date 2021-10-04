import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses,setCourses] = useState([])

    useEffect(() =>{
        fetch("./courses.JSON")
        .then(res =>res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div className="container mt-5 p-3">
            <h2 className="text-center course">Join Our Courses</h2>
            <div className="line mb-5"></div>
        <div className="row ">
            {
            courses.map(course =><Course
            key={course.key}
            course={course}

            ></Course>)
        }
        </div>
        </div>
    );
};

export default Courses;