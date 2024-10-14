import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';

const Login = () => {
  const [formData, setFormData] = useState({
    username_or_email: '',
    password: ''
  });

  const {setUser} = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/admin/login', formData, {
        withCredentials: true,
      });
      setUser(response.data.user);
      navigate('/admin-dashboard');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
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
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
