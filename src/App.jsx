import React from "react";
import RoomList from "./components/room/RoomList";
import ReservationForm from "./components/room/ReservationForm";
import "./App.css";
import RoomGrid from "./components/room/RoomGrid";
import NavBarBorrar from "./components/room/navbarBorrar";
import RoomPreview from "./components/room/RoomPreview";
import RoomPagePreview from "./components/RoomPagePreview";
import roomsData from './components/room/roomsData'

const App = () => {
  return (
    <div>
      {/* <h1 className='font-title'>1 Cama doble</h1> */}
      <NavBarBorrar />
      {/* <RoomGrid /> */}
      
     <RoomPagePreview />

    </div>
  );
};

export default App;
