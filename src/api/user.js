import axios from "axios";

const API = 'http://hotelcodescape.tech:3000/api/';

// export const roomRequest = room => axios.post(`${API}roomCreate`, room);

export const getUsers = () => axios.get(`${API}getUsers`);

export const updateUser = (id, user) => axios.put(`${API}updateUser/${id}`, user);

export const deleteUser = (id) => axios.delete(`${API}deleteUser/${id}`);

export const createUser = (user) => axios.post(`${API}createUserAdmin`, user);