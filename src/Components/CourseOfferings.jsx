import React, { useState } from 'react';

const CourseOfferings = ({ courses, courseTypes, offerings, setOfferings }) => {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedCourseType, setSelectedCourseType] = useState("");

    const addCourseOffering = () => {
        if (selectedCourse && selectedCourseType) {
            const newOffering = `${selectedCourseType} - ${selectedCourse}`;
            // Add the new offering to the offerings array
            setOfferings((prevOfferings) => [...prevOfferings, newOffering]);
        }
    };

    return (
        <div>
            <h2>Course Offerings</h2>

            <div>
                <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
                    <option value="">Select Course</option>
                    {courses.map((course, index) => (
                        <option key={index} value={course}>
                            {course}
                        </option>
                    ))}
                </select>
                <select onChange={(e) => setSelectedCourseType(e.target.value)} value={selectedCourseType}>
                    <option value="">Select Course Type</option>
                    {courseTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <button onClick={addCourseOffering}>Add Course Offering</button>
            </div>

            <h3>Existing Course Offerings:</h3>
            <ul>
                {offerings.map((offering, index) => (
                    <li key={index}>{offering}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseOfferings;
