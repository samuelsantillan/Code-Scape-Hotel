import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./Room.css";
import "./IconContainer";
import "./roomsData";
import { FaShower, FaHips, FaHotjar, FaAd } from "react-icons/fa";
import IconContainer from "./IconContainer";
import RoomDescription from "./RoomDescription";

const Room = (props) => {
  console.log("PROPS", props);

  const photos = props.photos;
  const roomId = props._id;

  return (
    <div className="room-card flex">
      <div className="card-body flex">
        <Carousel infiniteLoop autoPlay>
          {photos.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index}`} />
            </div>
          ))}
        </Carousel>
        <div className="text-center">
          <Link
            to={`/RoomDescription/${roomId}`}
            className="btn btn-details my-1 mx-3"
            style={{ textDecoration: "none" }}
          >
            Realizar reserva
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
