import axios from "axios";

// Falls back to localhost so `npm start` still works with zero setup,
// but lets prod builds point at a real backend via .env
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default api;
