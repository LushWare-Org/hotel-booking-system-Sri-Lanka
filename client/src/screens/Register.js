import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { Snackbar, Slide } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';
import './Register.css';

const styles = `
  .signup-image-slide {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
  }
  .signup-image-slide.in-view {
    transform: translateX(0);
    opacity: 1;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
    setSnackbarMessage("");
    setSnackbarType("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setSnackbarType("error");
      setSnackbarMessage("Passwords do not match");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/users/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contact_number: formData.phone,
      });

      setSnackbarType("success");
      setSnackbarMessage(response.data.message || "You registered successfully.");
      setOpenSnackbar(true);

      setTimeout(() => {
        document.title = "Login - Your Website";
        navigate("/login");
      }, 3000);
    } catch (error) {
      setSnackbarType("error");
      setSnackbarMessage(
        error.response?.data?.message || "Registration failed. Please try again."
      );
      setOpenSnackbar(true);
    }
    setLoading(false);
  };

  const handleSocialRegister = (provider) => {
    const url = `http://localhost:8000/api/users/auth/${provider}`;
    window.location.href = url;
  };

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-left" ref={imageRef}>
          <img
            src="https://i.postimg.cc/XJW57LdM/pexels-akos-helgert-82252426-9013701.jpg"
            alt="Slide 1"
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-125 signup-image-slide ${imageInView ? 'in-view' : ''}`}
          />
        </div>

        <div className="signup-right">
          <div className="signup-formContainer">
            {/* <div className="signup-logo">★</div> */}
            <h2 className="signup-heading">Welcome to the LushGlow!</h2>
            <p className="signup-subtext">Please enter your details here</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="signup-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="signup-input"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="signup-input"
                required
              />
              <div className="signup-passwordField">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="signup-input"
                  required
                />
                <span onClick={() => setShowPassword(!showPassword)} className="signup-icon">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="signup-passwordField">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="signup-input"
                  required
                />
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="signup-icon">
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <button
                type="submit"
                className="signup-signupButton"
                disabled={loading}
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>
              <button
                type="button"
                className="signup-googleButton"
                onClick={() => handleSocialRegister("google")}
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="signup-socialIcon"
                />
                Sign Up with Google
              </button>
              <button
                type="button"
                className="signup-facebookButton"
                onClick={() => handleSocialRegister("facebook")}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  className="signup-socialIcon"
                />
                Sign Up with Facebook
              </button>
            </form>
            <p>
              Already have an account? <Link to="/login" className="signup-link">Login</Link>
            </p>
          </div>
        </div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
          TransitionComponent={TransitionUp}
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

export default Signup;