import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Comment API Routes

// Create a new comment on a page
export const createComment = async (page_id, commentData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/comments/${page_id}`, commentData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Fetch comments for a specific page by page_id
export const getComments = async (page_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/comments/${page_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a specific comment by comment_id
export const deleteComment = async (comment_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/comments/${comment_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Update a specific comment by comment_id
export const updateComment = async (comment_id, updatedData) => {
  try {
    const response = await axios.put(`${DOMAIN}/api/comments/${comment_id}`, updatedData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
