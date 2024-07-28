import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'emailOrPhone') {
            setEmailOrPhone(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const isValidEmailOrPhone = (input) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+1[0-9]{10}$/;
        return emailPattern.test(input) || phonePattern.test(input);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!emailOrPhone || !password || !isValidEmailOrPhone(emailOrPhone)) {
            setError('Please enter a valid email or phone number and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/login', {
                username: emailOrPhone, // Ensure this matches the backend expectation
                password: password
            });
            console.log(response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed', error);
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Log in to PayPal</h2>
                <input
                    type="text"
                    name="emailOrPhone"
                    value={emailOrPhone}
                    onChange={handleInputChange}
                    placeholder="Email or mobile number"
                    className={submitted && !isValidEmailOrPhone(emailOrPhone) ? 'input-error' : ''}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={submitted && !password ? 'input-error' : ''}
                />
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="login-button">Login</button>
                <div className="login-options">
                    <button type="button" onClick={() => navigate('/forgot')} className="forgot-email-button">Forgot email?</button>
                    <button type="button" onClick={() => navigate('/signup')} className="signup-button">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
