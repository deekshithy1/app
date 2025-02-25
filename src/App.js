import React, { useState } from 'react';
import './App.css';
import Coursetypes from './Components/Coursetypes';
import Courses from './Components/Courses';
import CourseOfferings from './Components/CourseOfferings';
import StudentRegistrations from './Components/StudentRegistrations';

function App() {
    const [courses, setCourses] = useState(["Hindi", "English", "Urdu", "Telugu"]);
    const [courseTypes, setCourseTypes] = useState(["Individual", "Group", "Special"]);
    const [offerings, setOfferings] = useState([]);

    return (
        <div className="App">
            <Coursetypes courseTypes={courseTypes} setCourseTypes={setCourseTypes} />
            <Courses courses={courses} setCourses={setCourses} />
            <CourseOfferings 
                courses={courses} 
                courseTypes={courseTypes} 
                offerings={offerings} 
                setOfferings={setOfferings} 
            />
            <StudentRegistrations offerings={offerings} />
        </div>
    );
}

export default App;
