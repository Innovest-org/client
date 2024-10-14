import axios from 'axios';
import { DOMAIN } from '../Config/config';

// User Auth Routes

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/user/register`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// User login
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/user/login`, loginData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Verify user
export const verifyUser = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/user/verify`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/user/forgot-password`, { email }, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Reset password
export const resetPassword = async (passwordData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/user/reset-password`, passwordData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Approve user (only for admins)
export const approveUser = async (user_id) => {
  try {
    const response = await axios.put(`${DOMAIN}/api/user/approve-user/${user_id}`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Reject user (only for admins)
export const rejectUser = async (user_id) => {
  try {
    const response = await axios.put(`${DOMAIN}/api/user/reject-user/${user_id}`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get pending users (only for admins)
export const getPendingUsers = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/user/pending-users`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// User Management Routes

// Search users
export const searchUsers = async (searchParams) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/user/search`, {
      params: searchParams,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get user by ID
export const getUserById = async (user_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/user/${user_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete user (only for admins)
export const deleteUser = async (user_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/user/${user_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Update user
export const updateUser = async (user_id, userData) => {
  try {
    const response = await axios.put(`${DOMAIN}/api/user/${user_id}`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
