import { createContext } from "react";
import { useContext, useState } from "react";
import { roomRequest, getRooms, deleteRoom, getRoom, updateRoom } from "../api/room.js";
import { getUsers } from '../api/user.js';
const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useTask must be used within an AdminProvider");
  }
  return context;
};

export function AdminProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]); 
  const createRoom = async (room) => {
    console.log("room created");
    const res = await roomRequest(room);
    console.log(res);
  };

  const updateRoomRequest = async (id, room) => {
    try{
      const res = await updateRoom(id, room);
      console.log(res);
    }catch(error){
      console.log(error);
    }
  };


  const getRoomRequest = async (id) => {
    try {
      const res = await getRoom(id);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRoomsRequest = async () => {
    try {
      const res = await getRooms();
      setRooms(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoomRequest = async (id) => {
    try {
      const res = await deleteRoom(id);
      console.log(res);
      if (res.status === 200) {
        setRooms(rooms.filter((room) => room._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersRequest = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        rooms,
        createRoom,
        getRoomRequest,
        deleteRoomRequest,
        getRoomsRequest,
        updateRoomRequest,
        getUsersRequest,
        users
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
