import axios from "axios";

const API = 'http://hotelcodescape.tech:3000/api/'

export const roomRequest = room => axios.post(`${API}roomCreate`, room);

export const getRooms = () => axios.get(`${API}roomGet`);

export const getRoom = (id) => axios.get(`${API}roomGet/${id}`);

export const updateRoom = (id, room) => axios.put(`${API}roomUpdate/${id}`, room);

export const deleteRoom = (id) => axios.delete(`${API}roomDelete/${id}`);