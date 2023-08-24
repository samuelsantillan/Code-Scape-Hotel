import axios from "./axios";



// export const roomRequest = room => axios.post(`roomCreate`, room);

export const getUsers = () => axios.get(`getUsers`);

export const updateUser = (id, user) => axios.put(`updateUser/${id}`, user);

export const deleteUser = (id) => axios.delete(`deleteUser/${id}`);

export const createUser = (user) => axios.post(`createUserAdmin`, user);

export const getUser = (id) => axios.get(`getUser/${id}`);