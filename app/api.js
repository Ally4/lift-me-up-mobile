import axios from 'axios';

const API_BASE_URL = 'http://localhost:1234/api/v1/auth/login'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  method: 'POST'
});

export default api;