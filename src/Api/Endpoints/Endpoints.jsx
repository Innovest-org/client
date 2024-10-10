import axios from 'axios';
import { DOMAIN } from "../Config/config";

// Admin

export const createAdmin = (adminData) => {
    return axios.post(`${DOMAIN}/admin`, adminData);
};