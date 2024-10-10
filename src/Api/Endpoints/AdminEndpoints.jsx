import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Admin
export const createAdmin = async (adminData) => {
    return axios.post(`${DOMAIN}/api/admin/`, adminData, {
        withCredentials: true,
    });
};

export const updateAdmin = async (admin_id, adminData) => [
    axios.put(`${DOMAIN}/api/admin/${admin_id}`, adminData, {
        withCredentials: true,
    }),
]

export  const getAdmins = async () => {
    return await axios.get(`${DOMAIN}/api/admin`, {
        withCredentials: true,
    });
};
