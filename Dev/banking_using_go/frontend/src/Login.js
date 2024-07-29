import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const isValidEmail = (input) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(input);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!email || !password || !isValidEmail(email)) {
            setError('Please enter a valid email and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/login', {
                email: email, // Ensure this matches the backend expectation
                password: password
            });
            console.log(response.data);
            // Navigate to the dashboard or handle successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed', error);
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Log in</h2>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={submitted && !isValidEmail(email) ? 'input-error' : ''}
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
                    <button type="button" onClick={() => navigate('/forgot')} className="forgot-email-button">Forgot password?</button>
                    <button type="button" onClick={() => navigate('/signup')} className="signup-button">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
