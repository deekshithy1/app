import React, { useState } from 'react';

const StudentRegistrations = ({ offerings }) => {
    const [students, setStudents] = useState({});
    const [newStudent, setNewStudent] = useState("");
    const [selectedOffering, setSelectedOffering] = useState("");

    const registerStudent = () => {
        if (newStudent && selectedOffering) {
            setStudents((prev) => ({
                ...prev,
                [selectedOffering]: [...(prev[selectedOffering] || []), newStudent],
            }));
            setNewStudent(""); 
        }
    };

    return (
        <div >
            <h2>Student Registrations</h2>

           
            <div>
                <input
                    type="text"
                    placeholder="Enter Student Name"
                    value={newStudent}
                    onChange={(e) => setNewStudent(e.target.value)}
                />
                <select
                    onChange={(e) => setSelectedOffering(e.target.value)}
                    value={selectedOffering}
                >
                    <option value="">Select Course Offering</option>
                    {offerings.map((offering, index) => (
                        <option key={index} value={offering}>
                            {offering}
                        </option>
                    ))}
                </select>
                <button onClick={registerStudent}>Register</button>
            </div>

          
            <h3>Registered Students:</h3>
            <ul>
                {offerings.map((offering, index) => (
                    <li key={index}>
                        <h4>{offering}</h4>
                        <ul>
                            {(students[offering] || []).map((student, idx) => (
                                <li key={idx}>{student}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentRegistrations;
