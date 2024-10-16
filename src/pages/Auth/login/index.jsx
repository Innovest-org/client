import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import './login.css';
import login from '../../../assets/section3Image3.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username_or_email: '',
    password: ''
  });

  const { setUser } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!endpoint) {
      setErrorMessage('Please select a login type.');
      return;
    }

    try {
      const response = await axios.post(endpoint, formData, {
        withCredentials: true,
      });
      setUser(response.data.user);

      if (response.data.user.role === 'ADMIN' || response.data.user.role === 'SUPER_ADMIN') {
        navigate('/admin-dashboard');
      } else if (response.data.user.role === 'ENTREPRENEUR') {
        navigate('/entrepreneur-dashboard');
      } else if (response.data.user.role === 'INVESTOR') {
        navigate('/investor-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleAdminLogin = () => {
    try {
      setEndpoint('https://server-production-82fc.up.railway.app/api/admin/login');
    } catch (error) {
      setErrorMessage('Failed to set Admin login endpoint.');
    }
  };

  const handleUserLogin = () => {
    try {
      setEndpoint('https://server-production-82fc.up.railway.app/api/user/login');
    } catch (error) {
      setErrorMessage('Failed to set User login endpoint.');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card w-75">
            <div className="card-body">
              <h3 className="text-center">Login</h3>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username_or_email">Username or Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username_or_email"
                    name="username_or_email"
                    value={formData.username_or_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn w-100 login-btn" onClick={handleAdminLogin}>
                  Admin Login
                </button>
                <button type="submit" className="btn w-100 login-btn mt-2" onClick={handleUserLogin}>
                  User Login
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-none d-md-block">
          <div className="login-image h-100">
            <img src={login} alt="login" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
