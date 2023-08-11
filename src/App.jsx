import React from "react";
import RoomList from "./components/room/RoomList";
import ReservationForm from "./components/room/ReservationForm";
import "./App.css";
import RoomGrid from "./components/room/RoomGrid";
import NavBarBorrar from "./components/room/navbarBorrar";
import RoomPreview from "./components/room/RoomPreview";
import RoomPagePreview from "./components/RoomPagePreview";
import roomsData from './components/room/roomsData'
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBarBorrar />
      
     <RoomPagePreview />
     
     <Footer />
    </div>
  );
};

export default App;
