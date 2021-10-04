import React, { useEffect, useState } from 'react';
import CourseDt from '../CourseDt/CourseDt';
import "./CoursesDt.css"

const CoursesDt = () => {
    const [CoursesDetails, setCoursesDetails] = useState([])

    useEffect(() =>
        fetch("./coursesdetails.JSON")
        .then(res =>res.json())
        .then(data => setCoursesDetails(data))
    )
    return (
        <div className="container">
             <h2 className="text-center course mt-5">Join Our Courses</h2>
             <div className="line mb-5"></div>
        <div className="row">
       
            {
                CoursesDetails.map(details =><CourseDt
                key={details.Instructor}
                courseDetails={details}>

                </CourseDt>)
            }
           
        </div>
        </div>
    );
};

export default CoursesDt;