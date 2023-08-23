import axios from "./axios";


export const roomUserRequest = room => axios.post(`roomCreate`, room);

export const getRooms = () => axios.get(`roomGet`);

export const getRoomUser = (id) => axios.get(`getAvailableDate/${id}`);

export const updateRoom = (id, room) => axios.put(`roomUpdate/${id}`, room);

export const deleteRoom = (id) => axios.delete(`roomDelete/${id}`);