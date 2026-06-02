import React, { useState } from 'react';
import { api } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import './auth.css';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const response = await api.register(formData);
      if (response.ok) {
        alert('Account created! Please log in.');
        navigate('/login');
      } else {
        const text = await response.text();
        setError(text || 'Registration failed.');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="custom-auth-wrapper">
      <div className="custom-auth-logo">Welcome</div>

      <div className="custom-auth-box">
        <h2>Create Account</h2>
        <p className="custom-auth-subtitle">Sign up to get started</p>

        {error && (
          <div style={{ color: '#ff6b6b', background: 'rgba(255,0,0,0.1)', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="custom-input-group">
            <label>Full Name</label>
            <div className="custom-input-wrapper">
              <FaUser className="custom-input-icon" />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="custom-input-group">
            <label>Email Address</label>
            <div className="custom-input-wrapper">
              <FaEnvelope className="custom-input-icon" />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="custom-input-group">
            <label>Password</label>
            <div className="custom-input-wrapper">
              <FaLock className="custom-input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <span className="custom-password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="custom-auth-btn" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : <><span>Create Account</span> <FaArrowRight /></>}
          </button>
        </form>

        <p className="custom-switch-auth">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>

      <div className="custom-bottom-links">
        By continuing, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
  );
}

