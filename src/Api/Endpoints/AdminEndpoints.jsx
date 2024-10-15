import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Admin Registration
export const registerAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${DOMAIN}/api/admin/register`, adminData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Admin Login
export const loginAdmin = async (loginData) => {
    try {
        const response = await axios.post(`${DOMAIN}/api/admin/login`, loginData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Create New Admin (SUPER_ADMIN only)
export const createAdmin = async (adminData,) => {
    try {
        const response = await axios.post(`${DOMAIN}/api/admin/`, adminData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Update Admin (Based on Role and Permissions)
export const updateAdmin = async (admin_id, adminData) => {
    try {
        const response = await axios.put(`${DOMAIN}/api/admin/${admin_id}`, adminData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Delete Admin (SUPER_ADMIN or ADMIN based on permissions)
export const deleteAdmin = async (admin_id) => {
    try {
        const response = await axios.delete(`${DOMAIN}/api/admin/${admin_id}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Get a list of all Admins (For SUPER_ADMIN and ADMIN roles)
export const getAdmins = async () => {
    try {
        const response = await axios.get(`${DOMAIN}/api/admin`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Search for Admins (Based on specific search criteria)
export const searchAdmins = async (query) => {
    try {
        const response = await axios.get(`${DOMAIN}/api/admin/search`, {
            params: query,
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Get Admin by ID
export const getAdminById = async (admin_id) => {
    try {
        const response = await axios.get(`${DOMAIN}/api/admin/${admin_id}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Admin Logout
export const logout = async () => {
    try {
        const response = await axios.get(`${DOMAIN}/api/admin/logout`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
