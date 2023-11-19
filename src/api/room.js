import axios from "./axios";

export const roomRequest = (room) => {

  axios.post(`roomCreate`, room);
}
export const getRooms = () => axios.get(`roomGet`);

export const getRoom = (id) => axios.get(`roomGet/${id}`);

export const updateRoom = (id, room) => axios.put(`roomUpdate/${id}`, room);

export const deleteRoom = (id) => axios.delete(`roomDelete/${id}`);

export const uploadServices = (name, file) => {
  const formData = new FormData();
  formData.append("image", file, name);
  return axios.post('upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const createRoomWithPhoto = (room,name,file) => {
  const formData = new FormData();
  formData.append("image", file, name);
  formData.append("room", JSON.stringify(room));
  return axios.post('roomCreateWithPhotos', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const updateRoomWithPhoto = (id, room,name,file) => {
  const formData = new FormData();
  formData.append("image", file, name);
  formData.append("room", JSON.stringify(room));
  return axios.put(`roomUpdateWithPhotos/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}