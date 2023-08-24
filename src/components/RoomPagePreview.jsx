import React, { useEffect } from "react";
import RoomPreview from "./room/RoomPreview";
import { useRoom } from "../context/RoomContext";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";

const RoomPagePreview = () => {

  const params = useParams();
  const {rooms, getRoomsRequest} = useRoom();
  const { getUserRequest } = useAuth();

  console.log("Esto recibo de params",params);
  useEffect(() => {
    getRoomsRequest();
    getUserRequest(params._id);
  }, []);
  
  console.log("Esto recibo de rooms",rooms);

  return ( 
    <>
      {rooms.map((room) =>(
        <RoomPreview
        key={room._id}
        _id={room._id}
        isImageFirst = {true}
        photos={room.photos}
        nameHabitation={room.nameHabitation}
        description={room.description}
        />
      ))}
    </>
  );
};

export default RoomPagePreview;
