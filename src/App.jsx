import React from 'react';
import RoomList from './components/room/RoomList';
import ReservationForm from './components/room/ReservationForm';
import './App.css'

const roomsData = [
  {
    
    type: 'Habitación cama matrimonial común',
    price: '$100',
    availableDates: ['2023-08-01', '2023-08-02', '2023-08-03'],
    images: [
      'https://images.pexels.com/photos/17227604/pexels-photo-17227604/free-photo-of-hotel-cama-lampara-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/17227603/pexels-photo-17227603/free-photo-of-hotel-cama-lampara-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // Agrega las URLs de más imágenes...
    ],
  },
  ];



const App = () => {
  return (
    <div className='background-color-page'>
      <h2 className='font'>CodeScape Hotel</h2>
      <RoomList rooms={roomsData} />
      <ReservationForm rooms={roomsData} />
    </div>
  );
};

export default App;
