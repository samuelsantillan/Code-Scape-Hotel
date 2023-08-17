import axios from "axios";

const API = 'http://localhost:3000/api/';

// export const roomRequest = room => axios.post(`${API}roomCreate`, room);

export const getUsers = () => axios.get(`${API}getUsers`);

export const updateUser = (id, user) => axios.put(`${API}updateUser/${id}`, user);

export const deleteRoom = (id) => axios.delete(`${API}roomDelete/${id}`);