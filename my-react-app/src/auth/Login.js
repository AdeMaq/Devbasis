import React, { useState } from 'react';
import { api } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import './auth.css';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const res = await api.login(formData);
      if (res.ok) {
        localStorage.setItem('loggedIn', 'true');
        navigate('/dashboard');
      } else {
        const text = await res.text();
        setError(text || 'Invalid credentials.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="custom-auth-wrapper">
      <div className="custom-auth-logo">Welcome to the mini website</div>

      <div className="custom-auth-box">
        <h2>Welcome Back</h2>
        <p className="custom-auth-subtitle">Enter your credentials to access your account</p>

        {error && (
          <div style={{ color: '#721c24', backgroundColor: '#f8d7da', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
            {isLoading ? 'Signing In...' : <><span>Sign In</span> <FaArrowRight /></>}
          </button>
        </form>

        <p className="custom-switch-auth">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      <div className="custom-bottom-links">
        By continuing, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
  );
}