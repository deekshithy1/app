import React from 'react';
import { useState } from 'react';
const Coursetypes = ({ courseTypes, setCourseTypes }) => {
    const [newCourse, setNewCourse] = useState("");
    
    const handleDelete = (c) => {
        setCourseTypes(courseTypes.filter(ct => ct !== c));
    };

    const addCourse = () => {
        if (newCourse.trim() !== "") {
            setCourseTypes([...courseTypes, newCourse]);
            setNewCourse("");
        }
    };

    return (
        <div>
            <h2>Course Types</h2>
            <ol>
                {courseTypes.map((c, index) => (
                    <li key={index}>
                        {c}
                        <button onClick={() => handleDelete(c)}>Delete</button>
                    </li>
                ))}
            </ol>
            <input 
                type="text" 
                placeholder="Add new course type" 
                value={newCourse} 
                onChange={(e) => setNewCourse(e.target.value)} 
            />
            <button onClick={addCourse}>Add Course</button>
        </div>
    );
};

export default Coursetypes;
