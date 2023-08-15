import React, { useState } from "react";
import Modal from "react-modal";
import { FaShower, FaHips, FaHotjar, FaAd } from "react-icons/fa";
import IconContainer from "./IconContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



Modal.setAppElement("#root");

const roomExample = {
  type: "Cama matrimonial común",
  price: "$100",
  availableDates: ["2023-08-01", "2023-08-02", "2023-08-03"],
  images: [
    "/src/assets/familiar1.jpg",
    "/src/assets/Habitación estándar.jpg",
    "/src/assets/suite1.jpg",
  ],
};

const customStyles = {
  content: {
    height:"75%",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "8px 10px 8px rgba(0, 0, 0, 0.2)",
  },
};

const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className="room-container mx-3">
      <button onClick={closeModal}>Cerrar</button>

        <div className="">
          <Carousel>
            {roomExample.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagen ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="room-element mb-3">
          <IconContainer icon={<FaShower />} name="Ducha" />
        </div>
        <div className="room-element">
          <IconContainer icon={<FaHotjar />} name="Calefacción" />
        </div>
        <div className="room-element">
          <IconContainer icon={<FaAd />} name="Balcón" />
        </div>
        <div className="room-element">
          <IconContainer icon={<FaHips />} name="Cama Doble" />
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
