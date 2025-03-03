import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { Snackbar, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';
import './Login.css';

const styles = `
  .login-image-slide {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
  }
  .login-image-slide.in-view {
    transform: translateX(0);
    opacity: 1;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const [loading, setLoading] = useState(false);

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSnackbarMessage('');
    setSnackbarType('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/users/login', {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('token', token);

      setSnackbarType('success');
      setSnackbarMessage(response.data.message || 'You logged in successfully.');
      setOpenSnackbar(true);

      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      console.error('Login Error:', {
        message: error.message,
        response: error.response ? {
          status: error.response.status,
          data: error.response.data,
        } : 'No response from server',
      });
      setSnackbarType('error');
      setSnackbarMessage(
        error.response?.data?.message || 'Login failed. Please check your credentials or server status.'
      );
      setOpenSnackbar(true);
    }
    setLoading(false);
  };

  const handleSocialLogin = (provider) => {
    const url = `http://localhost:8000/api/users/auth/${provider}`;
    window.location.href = url;
  };

  return (
    <>
      <div className="login-container">
        <div className="login-left" ref={imageRef}>
          <img
            src="https://i.postimg.cc/tRxpdphR/Screenshot-2025-03-03-100516.png"
            alt="Slide 1"
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-125 login-image-slide ${imageInView ? 'in-view' : ''}`}
          />
        </div>

        <div className="login-right">
          <div className="login-formContainer">
            <div className="login-logo">★</div>
            <h2 className="login-heading">Welcome Back and Please Login!</h2>
            <p className="login-subtext">Please enter your login details</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
                required
              />
              <div className="login-passwordField">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
                <span onClick={() => setShowPassword(!showPassword)} className="login-icon">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <button type="submit" className="login-loginButton" disabled={loading}>
                {loading ? 'Logging In...' : 'Log In'}
              </button>
              <button
                type="button"
                className="login-googleButton"
                onClick={() => handleSocialLogin('google')}
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="login-socialIcon"
                />
                Log In with Google
              </button>
              <button
                type="button"
                className="login-facebookButton"
                onClick={() => handleSocialLogin('facebook')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  className="login-socialIcon"
                />
                Log In with Facebook
              </button>
            </form>
            <p>
              Don't have an account? <Link to="/register" className="login-link">Sign Up</Link>
            </p>
          </div>
        </div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
          TransitionComponent={Slide}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          ContentProps={{
            className: snackbarType === 'error' ? 'errorSnackbar' : 'successSnackbar',
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Login;