import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    // State hooks for handling user input and registration data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationData, setRegistrationData] = useState(null);

    // Function to update state based on form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    // Function to handle form submission for registration
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', { username, password });
            setRegistrationData(response.data); // Set the registration data from the response
            console.log("Registration successful", response.data);
        } catch (error) {
            console.error('Failed to register', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {registrationData && <p>Welcome, {registrationData.username}!</p>}
        </div>
    );
}

export default Register;
