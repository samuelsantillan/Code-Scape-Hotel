import React, { useEffect, useState } from "react";
import { FaShower, FaHips, FaHotjar, FaAd } from "react-icons/fa";
import IconContainer from "./IconContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import NavbarComponent from "../Navbar/NavbarComponent";
import "../Navbar/navbarStyle.css";
import { Calendar } from "react-multi-date-picker";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Room.css";
import { useParams } from "react-router-dom";
import { useRoom } from '../../context/RoomContext'

const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

const RoomDescription = (props) => {
  const {nameHabitation, price, description, photos,  type} = props;
  const params = useParams();
  console.log("Parametros", params.id);
  const {rooms, getRoomRequest} = useRoom();
  useEffect(() => {
    getRoomRequest(params.id);
  },[]
  );
  console.log(rooms);
  
  return (
    <div>
      <NavbarComponent />

      <Container>
        <Row className="pt-5  mt-5 d-flex align-items-center ">
          <Col xs={8} className="text-left">
            <h2>{rooms.nameHabitation}</h2>
          </Col>
          <Col xs={4} className="d-flex align-items-center justify-content-end">
            <h5>${rooms.price}</h5>
          </Col>
        </Row>
        <div>
          <Carousel infiniteLoop autoPlay transitionTime={1000}>
            {rooms.photos.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagen ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <Row className="align-items-center justify-content-center mx-2">
          <Col xs={6} md={3} className="text-center">
            <div className="mb-3">
              <IconContainer icon={<FaShower />} name="Ducha" />
            </div>
            <div>
              <IconContainer icon={<FaAd />} name="Balcón" />
            </div>
          </Col>
          <Col xs={6} md={3} className=" justify-content-end">
            <div className="mb-3">
              <IconContainer icon={<FaHotjar />} name="Calefacción" />
            </div>
            <div>
              <IconContainer icon={<FaHips />} name="Cama Doble" />
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col className="text-center">
            <Calendar
              numberOfMonths={2}
              months={months}
              weekDays={weekDays}
              range
              style={{ display: "inline-block" }}
            />
          </Col>
        </Row>
        <div className="text-center room-card ">
          <Link
            to="/ReservationForm"
            className=" btn btn-details my-5 "
            style={{ textDecoration: "none" }}
          >
            Confirmar reserva
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default RoomDescription;
