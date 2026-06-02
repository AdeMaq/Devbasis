import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Entry from './components/entry';
import Login from './auth/Login';
import Signup from './auth/signup';

const PrivateRoute = ({ children }) => {
    return localStorage.getItem('loggedIn') ? children : <Navigate to="/login" replace />;
};

const PublicOnlyRoute = ({ children }) => {
    return localStorage.getItem('loggedIn') ? <Navigate to="/dashboard" replace /> : children;
};

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={localStorage.getItem('loggedIn') ? '/dashboard' : '/login'} replace />} />
            <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
            <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Entry /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;