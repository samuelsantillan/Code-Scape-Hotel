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
      return res.data;
    } catch (error) {
    }
  };

  const getRoomUserRequest = async (id) => {
    try {
      const res = await getRoomUser(id);
      setRooms(res.data);
      return res.data;
    } catch (error) {
    }
  };

  const getRoomUserValidateReservationRequest = async (id) => {
    try {
      const res = await getRoomUserReservation(id);

      setRoomUser(res.data);
      return res.data;
    } catch (error) {
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
