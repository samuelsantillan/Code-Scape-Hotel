import { createContext } from "react";
import { useContext, useState } from "react";
import { roomRequest, getRooms, deleteRoom, getRoom, updateRoom } from "../api/room.js";

const RoomContext = createContext();

export const useRoom = () => {
  const context = useContext(RoomContext);
  
  if (!context) {
    throw new Error("useTask must be used within an AdminProvider");
  }
  return context;
};

export default function RoomProvider({ children }) {

  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  
  
  const createRoom = async (room) => {
    const res = await roomRequest(room);
  };

  const updateRoomRequest = async (id, room) => {
    try{
      const res = await updateRoom(id, room);
    }catch(error){
    }
  };

  const getRoomRequest = async (id) => {
    try {
      const res = await getRoom(id);
      setRooms(res.data);
      return res.data;
    } catch (error) {
    }
  };

  const getRoomsRequest = async () => {
    try {
      const res = await getRooms();
      setRooms(res.data);
    } catch (error) {
    }
  };

  const deleteRoomRequest = async (id) => {
    try {
      const res = await deleteRoom(id);
      if (res.status === 200) {
        setRooms(rooms.filter((room) => room._id !== id));
      }
    } catch (error) {
    }
  };

  const getUsersRequest = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
    }
  }

  return (
    <RoomContext.Provider
      value={{
        rooms,
        users,
        createRoom,
        getRoomRequest,
        deleteRoomRequest,
        getRoomsRequest,
        updateRoomRequest,
        getUsersRequest,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}