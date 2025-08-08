import axios from 'axios';

const api = axios.create({
  baseURL: '', // Proxy to backend server
});

export default api;
