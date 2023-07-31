import React from 'react';
import RoomList from './components/room/RoomList';
import ReservationForm from './components/room/ReservationForm';
import './App.css'
import RoomGrid from './components/room/RoomGrid';





const App = () => {
  return (
    <div >
      {/* <h1 className='font-title'>1 Cama doble</h1> */}
      <ReservationForm />
      {/* <RoomList rooms={roomsData} /> */}
      {/* <ReservationForm rooms={roomsData} /> */}
    </div>
  );
};

export default App;
