import React from 'react';
import "../css/Courses.css";
import CourseData from "./CourseData"
import Course1 from "../assets/1.jpg"
import Course2 from "../assets/1.jpg"
import Course3 from "../assets/1.jpg"

function Courses() {

    function redirectToCheckout() {
        window.location.href = '/checkout';
    }

    return (
        <div className="course">
            <h1>Free Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="coursecard" onClick={redirectToCheckout}>
                <CourseData
                    image={Course1}
                    heading="Enhance Floor Plan"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quos provident eius, minima perspiciatis cupiditate sequi eveniet, aliquam saepe est repellendus amet."
                />
                <CourseData
                    image={Course2}
                    heading="Concept Of Bar Bending Schedule Calculation"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur voluptatibus temporibus facilis ratione porro id illum."
                />
                <CourseData
                    image={Course3}
                    heading="Start With Foundation Part Estimation & Planning"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur provident, officiis odio obcaecati blanditiis aut nulla sed, aperiam veritatis."
                />
            </div>
        </div>
    );
}

export default Courses;
