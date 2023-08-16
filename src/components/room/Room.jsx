import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import "./Room.css";
import "./IconContainer";
import "./roomsData";
import { FaShower, FaHips, FaHotjar, FaAd } from "react-icons/fa";
import IconContainer from "./IconContainer";
import RoomDescription from "./RoomDescription";

const Room = ({ roomData }) => {
  const { type, price, availableDates, images } = roomData;

  const roomExample = {
    type: "Cama matrimonial común",
    price: "$100",
    availableDates: ["2023-08-01", "2023-08-02", "2023-08-03"],
    images: [
      "https://images.pexels.com/photos/17227604/pexels-photo-17227604/free-photo-of-hotel-cama-lampara-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/17227603/pexels-photo-17227603/free-photo-of-hotel-cama-lampara-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // Agrega las URLs de más imágenes...
    ],
  };


  return (
    <div className="room-card flex">
      <div className="card-body flex">
        {/* <p className="card-text color-fonts"> Precio: {price}</p> */}

        <Carousel>
          {roomExample.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index}`} />
            </div>
          ))}
        </Carousel>
        <div className="text-center ">
          <li>
            <Link to="/RoomDescription">Realizar reserva</Link>
          </li>
          <button className="btn btn-details my-1 mx-3">
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
