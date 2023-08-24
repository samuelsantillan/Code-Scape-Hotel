import axios from "./axios";


export const createRoomUserReservation = room => axios.post(`createRoomUserReservation`, room);

export const getRooms = () => axios.get(`roomGet`);

export const getRoomUser = (id) => axios.get(`getAvailableDate/${id}`);

export const getRoomUserReservation = (id) => axios.get(`roomUserReservation/${id}`);