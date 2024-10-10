import axios from 'axios';
import { DOMAIN } from "../Config/config";

// Admin
export const createAdmin = (adminData) => {
    return axios.post(`${DOMAIN}/api/admin/`, adminData);
};

export const getAdmins = () => {
    return axios.get(`${DOMAIN}/api/admin`);
};