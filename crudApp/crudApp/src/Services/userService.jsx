// src/Services/userService.jsx
import axios from 'axios';

export const fetchAllUsers = async (token) => {
  try {
    const response = await axios.get('/api/users/allusers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

const API_BASE_URL = 'http://localhost:8080/api/users';

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};
