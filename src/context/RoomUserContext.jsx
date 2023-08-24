import { createContext } from "react";
import { useContext, useState } from "react";
import {
  getRoomUser,
  createRoomUserReservation,
  getRoomUserReservation,
} from "../api/roomUser.js";

const RoomUserContext = createContext();

export const useRoomUser = () => {
  const context = useContext(RoomUserContext);

  if (!context) {
    throw new Error("useTask must be used within an RoomUserProvider");
  }
  return context;
};

export default function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [ roomUser, setRoomUser ] = useState([]); 
  const createRoomUserReservationRequest = async (room) => {
    try {
      const res = await createRoomUserReservation(room);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRoomUserRequest = async (id) => {
    try {
      const res = await getRoomUser(id);
      console.log(res);
      setRooms(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRoomUserValidateReservationRequest = async (id) => {
    try {
      const res = await getRoomUserReservation(id);
      console.log(id);
      console.log(res);
      setRoomUser(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoomUserContext.Provider
      value={{
        rooms,
        users,
        roomUser,
        getRoomUserRequest,
        createRoomUserReservationRequest,
        getRoomUserValidateReservationRequest,
      }}
    >
      {children}
    </RoomUserContext.Provider>
  );
}
