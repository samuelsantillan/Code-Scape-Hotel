import React, { useState } from "react";
import { FaShower, FaHips, FaHotjar, FaAd } from "react-icons/fa";
import IconContainer from "./IconContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDatePicker from "react-datepicker";
import DateRangePicker from "./DatePicker";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import NavbarComponent from "../Navbar/NavbarComponent";
import "../Navbar/navbarStyle.css";

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

const RoomDescription = () => {
  return (
    <div>
      <NavbarComponent />
      <Row className="pt-5 mx-1 mt-5 d-flex align-items-center text-center">
        <Col xs={8}>
          <h2>Nombre Habitación</h2>
        </Col>
        <Col xs={4}>
          <h5>$150</h5>
        </Col>
      </Row>
      <Container>
        <div>
          <Carousel>
            {roomExample.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagen ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="room-container mx-auto text-center">
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
      </Container>
    </div>
  );
};

export default RoomDescription;
