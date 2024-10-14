import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Search for pages (Requires permission to view pages)
export const searchPages = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/search-pages`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get all pages within a community (Requires VIEW_PAGE and VIEW_COMMUNITY permission)
export const getCommunityPages = async (community_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/${community_id}/pages`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Create a new page within a community (Requires CREATE_PAGE permission)
export const createPage = async (community_id, pageData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/community/${community_id}`, pageData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Update a page within a community (Requires UPDATE_PAGE permission)
export const updatePage = async (community_id, page_id, pageData) => {
  try {
    const response = await axios.put(`${DOMAIN}/api/community/${community_id}/${page_id}`, pageData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a page within a community (Requires DELETE_PAGE permission)
export const deletePage = async (community_id, page_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/community/${community_id}/${page_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get a specific page within a community (Requires VIEW_PAGE permission)
export const getPageById = async (community_id, page_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/${community_id}/${page_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Approve a page within a community (Requires APPROVE_PAGE permission)
export const approvePage = async (community_id, page_id) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/community/${community_id}/approve/${page_id}`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Reject a page within a community (Requires REJECT_PAGE permission)
export const rejectPage = async (community_id, page_id) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/community/${community_id}/reject/${page_id}`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get all pending pages within a community (Requires SUPER_ADMIN or ADMIN role)
export const getPendingPages = async (community_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/pages/pending/${community_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
