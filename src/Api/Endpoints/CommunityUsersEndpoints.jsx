import axios from 'axios';
import { DOMAIN } from '../Config/config';

// Join a community (Requires JOIN_COMMUNITY permission)
export const joinCommunity = async (community_id) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/community/${community_id}/join`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Approve a user to join a community (Requires APPROVE_USER permission)
export const approveUserToJoinCommunity = async (community_id, user_id) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/community/${community_id}/approve-user/${user_id}`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Reject a user from joining a community (Requires REJECT_USER permission)
export const rejectUserToJoinCommunity = async (community_id, user_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/community/${community_id}/reject-user/${user_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Remove a user from a community (Requires REMOVE_USER_FROM_COMMUNITY permission)
export const removeUserFromCommunity = async (community_id, user_id) => {
  try {
    const response = await axios.delete(`${DOMAIN}/api/community/${community_id}/users/${user_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Get all users in a community
export const getCommunityUsers = async (community_id) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/community/${community_id}/users`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
