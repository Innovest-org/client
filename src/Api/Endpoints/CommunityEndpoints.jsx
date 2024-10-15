import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Search Communities by query (for SUPER_ADMIN and ADMIN with VIEW_COMMUNITY permission)
export const searchCommunities = async (query) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/search`, {
      params: query,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Create a new community (SUPER_ADMIN and ADMIN with CREATE_COMMUNITY permission)
export const createCommunity = async (communityData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/community`, communityData, {
      withCredentials: true,
    });
    return response.data.community;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Update an existing community by ID (SUPER_ADMIN and ADMIN with UPDATE_COMMUNITY permission)
export const updateCommunity = async (community_id, communityData) => {
  try {
    const response = await axios.put(`${DOMAIN}/api/community/${community_id}`, communityData, {
      withCredentials: true,
    });
    return response.data.community;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a community by ID (SUPER_ADMIN and ADMIN with DELETE_COMMUNITY permission)
export const deleteCommunity = async (community_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/community/${community_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get community by name (SUPER_ADMIN and ADMIN with VIEW_COMMUNITY permission)
export const getCommunityByName = async (community_name) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/name/${community_name}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get community by ID (SUPER_ADMIN and ADMIN with VIEW_COMMUNITY permission)
export const getCommunityById = async (community_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/${community_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get all communities (Requires VIEW_COMMUNITY permission)
export const getAllCommunities = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
