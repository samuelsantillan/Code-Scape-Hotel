import React, { useEffect, useState } from "react";
import { FaShower, FaHips, FaHotjar, FaAd } from "react-icons/fa";
import IconContainer from "./IconContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import "../Navbar/navbarStyle.css";
import { Calendar } from "react-multi-date-picker";
import { Link } from "react-router-dom";
import "./Room.css";
import { useParams } from "react-router-dom";
import { useRoom } from "../../context/RoomContext";
import { useAuth } from "../../context/AuthContext";
import { useRoomUser } from "../../context/RoomUserContext";
import "./RoomDescription.css";

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
        <div className="container-room-description">
          <header className="mosaic-header">
            <div className="mosaic-header__logo"></div>
            <div className="mosaic-header__items">
              {rooms.photos.map((image, index) => (
                <div
                  key={index}
                  className={`mosaic-header__item mosaic-header__item--${
                    index + 1
                  }`}
                  // onClick={() => this.toggleLightbox(index)}
                >
                  <img
                    src={image}
                    // alt={name}
                    className="mosaic-header__img"
                    // onLoad={() => this.handleImageLoaded(index)}
                  />
                  {/* {!imageIsLoaded[index] && <div className="mosaic-header__placeholder" />} */}
                </div>
              ))}
            </div>
          </header>

          <Row className="calendar-row py-5 px-5">
            <Col xs={12} md={6} className="data-room justify-align-items-end d-flex flex-column">
              <h1 className="">{rooms.nameHabitation}</h1>
              <p className="">{rooms.description}</p>
            </Col>
            <Col xs={12} md={6} className="calendar-room ">
            
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
                  <div className="text-center  ">
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
                </Col>
             

              {/* <div className="mb-3">
              <IconContainer icon={<FaHotjar />} name="Calefacción" />
            </div>
            <div>
              <IconContainer icon={<FaHips />} name="Cama Doble" />
            </div> */}
            </Col>
          </Row>

      
        </div>
      )}
    </div>
  );
};

export default RoomDescription;
