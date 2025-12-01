import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // 세션 쿠키 자동 포함
});

export default api;
