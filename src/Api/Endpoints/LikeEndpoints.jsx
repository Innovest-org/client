import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Like API Routes

// Create a like (like a page)
export const createLike = async (page_id) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/likes/${page_id}`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a like (dislike a page)
export const deleteLike = async (page_id, like_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/likes/${page_id}/${like_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Fetch all likes for a specific page
export const getLikes = async (page_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/likes/${page_id}/likes`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
