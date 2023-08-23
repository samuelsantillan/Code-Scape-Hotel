import axios from "axios";

const API = 'http://hotelcodescape.tech:3000/api/'

export const roomUserRequest = room => axios.post(`${API}roomCreate`, room);

export const getRooms = () => axios.get(`${API}roomGet`);

export const getRoomUser = (id) => axios.get(`${API}getAvailableDate/${id}`);

export const updateRoom = (id, room) => axios.put(`${API}roomUpdate/${id}`, room);

export const deleteRoom = (id) => axios.delete(`${API}roomDelete/${id}`);