import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import HomePage from './hompage';
import './styles.css'; // Make sure your styles are imported


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    );
}

export default App;