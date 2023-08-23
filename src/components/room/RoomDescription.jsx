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
import { useRoom } from "../../context/RoomContext";
import { useAuth } from "../../context/AuthContext";
import { useRoomUser } from "../../context/RoomUserContext";

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

  const { isAuthenticated } = useAuth();
  const { getRoomUserRequest, rooms: roomUser } = useRoomUser();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  // const [dates, setDates] = useState([]);
  const params = useParams();
  // console.log("Parametros", params);
  const { rooms, getRoomRequest } = useRoom();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Primero, indicamos que la carga está en progreso
        setIsLoading(true);

        // Luego, realizamos las solicitudes
        await getRoomRequest(params.id);
        await getRoomUserRequest(params.id);

        // Finalmente, indicamos que la carga ha terminado
        setIsLoading(false);
      } catch (error) {
        // Manejo de errores si es necesario
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);
  console.log(roomUser);

  const extractedDates = roomUser.map((item) => ({
    startDate: new Date(item.startDate).toISOString().split("T")[0],
    endDate: new Date(item.endDate).toISOString().split("T")[0],
  }));
  console.log(extractedDates);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const numberOfMonths = windowWidth < 768 ? 1 : 2;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Row className="pt-5  mt-5 d-flex align-items-center ">
            <Col xs={8} className="text-left">
              <h2>{rooms.nameHabitation}</h2>
            </Col>
            <Col
              xs={4}
              className="d-flex align-items-center justify-content-end"
            >
              <h5>${rooms.price}</h5>
            </Col>
          </Row>
          <div>
            <div>
              <Carousel infiniteLoop autoPlay transitionTime={1000}>
                {rooms.photos &&
                  rooms.photos.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Imagen ${index}`} />
                    </div>
                  ))}
              </Carousel>
            </div>
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
                mapDays={({ date }) => {
                  const currentDate = new Date(
                    `${date.year}-${(date.month.index + 1)
                      .toString()
                      .padStart(2, "0")}-${date.day}`
                  );
                      
                  const startDate = new Date(extractedDates[2].startDate);
                  const endDate = new Date(extractedDates[2].endDate);
                  if (currentDate >= startDate && currentDate <= endDate) {
                    return {
                      disabled: false,
                      style: { color: "black" },
                      onClick: () => console.log("You clicked me!"),
                    };
                  } else {
                    return {
                      disabled: true,
                      style: { color: "#ccc" },
                    };
                  }
                }}
                numberOfMonths={numberOfMonths}
                months={months}
                weekDays={weekDays}
                range
                style={{ display: "inline-block" }}
              />
            </Col>
          </Row>
          <div className="text-center room-card ">
            {isAuthenticated && (
              <Link
                to="/ReservationForm"
                className="btn btn-details my-5"
                style={{ textDecoration: "none" }}
              >
                Confirmar reserva
              </Link>
            )}
            {!isAuthenticated && (
              <Link
                to="/login"
                className="btn btn-details my-5"
                style={{ textDecoration: "none" }}
              >
                Confirmar reserva
              </Link>
            )}
          </div>
        </Container>
      )}
    </div>
  );
};

export default RoomDescription;
