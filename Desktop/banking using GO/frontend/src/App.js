import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Account from './Account';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Update Route syntax to use "element" instead of "component" */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
