import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:1234/api/v1/auth/login'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  method: 'POST'
});

export default api;