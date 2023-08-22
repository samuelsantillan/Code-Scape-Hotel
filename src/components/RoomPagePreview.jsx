import React, { useEffect } from "react";
import RoomPreview from "./room/RoomPreview";
import { useRoom } from "../context/RoomContext";



const RoomPagePreview = () => {

  
  const {rooms, getRoomsRequest} = useRoom();


  
  useEffect(() => {
    getRoomsRequest();
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
