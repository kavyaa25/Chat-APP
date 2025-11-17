import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// SESSIONS
export const createSession = () => API.post("/sessions");
export const listSessions = () => API.get("/sessions");
export const renameSession = (id, title) => API.put(`/sessions/${id}`, { title });
export const deleteSessionApi = (id) => API.delete(`/sessions/${id}`);
export const getHistory = (id) => API.get(`/sessions/${id}`);

// CHAT
export const sendMessage = (id, question) =>
  API.post(`/chat/${id}`, { question });

// FEEDBACK
export const rateMessageApi = (sessionId, index, rating) =>
  API.post(`/feedback/${sessionId}/${index}`, { rating });
