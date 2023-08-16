import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RoomList from "./components/room/RoomList";
import ReservationForm from "./components/room/ReservationForm";
import "./App.css";
import RoomGrid from "./components/room/RoomGrid";
import NavBarBorrar from "./components/room/navbarBorrar";
import RoomPreview from "./components/room/RoomPreview";
import RoomPagePreview from "./components/RoomPagePreview";
import roomsData from "./components/room/roomsData";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Room from "./components/room/Room";
import RoomDescription from "./components/room/RoomDescription";
import Page2 from "./components/room/Page2";

const App = () => {
  return (
      <>
        <NavbarComponent/>
        <RoomPagePreview/>
        <Footer/>
      </>
  );
};

export default App;
