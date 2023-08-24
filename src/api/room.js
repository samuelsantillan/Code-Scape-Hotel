import axios from "./axios";

export const roomRequest = room => axios.post(`roomCreate`, room);

export const getRooms = () => axios.get(`roomGet`);

export const getRoom = (id) => axios.get(`roomGet/${id}`);

export const updateRoom = (id, room) => axios.put(`roomUpdate/${id}`, room);

export const deleteRoom = (id) => axios.delete(`roomDelete/${id}`);