import React from 'react';
import RoomList from './components/room/RoomList';
import ReservationForm from './components/room/ReservationForm';
import './App.css'
import RoomGrid from './components/room/RoomGrid';
import NavBarBorrar from './components/room/navbarBorrar';
import RoomPreview from './components/room/RoomPreview';



const App = () => {
  return (
    <div >
      {/* <h1 className='font-title'>1 Cama doble</h1> */}
      <NavBarBorrar />
      <RoomGrid />
      <RoomPreview />
      {/* <RoomList rooms={roomsData} /> */}
      {/* <ReservationForm rooms={roomsData} /> */}
    </div>
  );
};

export default App;
