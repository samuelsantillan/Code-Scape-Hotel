import { useEffect } from "react";
import RoomPreview from "./RoomPreview";
import { useRoom } from "../../context/RoomContext";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

const RoomPagePreview = () => {

  const params = useParams();
  const { rooms, getRoomsRequest } = useRoom();
  const { getUserRequest } = useAuth();

  useEffect(() => {
    getRoomsRequest();
    getUserRequest(params._id);
  }, []);
  console.log("Esto muestra rooms", rooms);

  return (
    <>
      <section className="heroSection-roomPreview">
        <div className="title-roomPreview fadeInText">
          <h1 className="titleGallery-roomPreview">HABITACIONES</h1>
          <div className="line-roomPreview" />
        </div>
      </section>
      {rooms.map((room) => (
        <RoomPreview
          key={room._id}
          _id={room._id}
          isImageFirst={true}
          photos={room.photos[0]}
          nameHabitation={room.nameHabitation}
          description={room.description}
        />
      ))}
    </>
  );
};

export default RoomPagePreview;
