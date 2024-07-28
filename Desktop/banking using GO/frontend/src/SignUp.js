import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Make sure your styles are imported

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        streetAddress: '',
        apt: '',
        city: '',
        state: '',
        zipCode: ''
    });

    // Handles updates to the form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signup', formData);
            console.log("Signup successful", response.data);
            alert("Registration Successful!");
        } catch (error) {
            console.error('Failed to register', error.response ? error.response.data : error.message);
            alert(error.response ? error.response.data : "Registration Failed!");
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange} // Attach handleInputChange here
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>Street Address:</label>
                    <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>Apt/Suite:</label>
                    <input
                        type="text"
                        name="apt"
                        value={formData.apt}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange} // And here
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
