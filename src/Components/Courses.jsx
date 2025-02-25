import React from 'react';
import { useState } from 'react';
const Courses = ({ courses, setCourses }) => {
    const [newCourse, setNewCourse] = useState("");

    const handleDelete = (course) => {
        setCourses(courses.filter(c => c !== course));
    };

    const addCourse = () => {
        if (newCourse.trim() !== "") {
            setCourses([...courses, newCourse]);
            setNewCourse('');
        }
    };

    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        {course}
                        <button onClick={() => handleDelete(course)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                placeholder="Add new course" 
                value={newCourse} 
                onChange={(e) => setNewCourse(e.target.value)} 
            />
            <button onClick={addCourse}>Add Course</button>
        </div>
    );
};

export default Courses;
