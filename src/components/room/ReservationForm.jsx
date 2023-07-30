import React, { useState } from 'react';

const ReservationForm = ({ rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDates, setSelectedDates] = useState('');
  const [reservationMessage, setReservationMessage] = useState('');

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDates(event.target.value);
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();

    // Verificar disponibilidad de la habitación en las fechas seleccionadas
    // (Aquí puedes implementar tu lógica para verificar las reservas duplicadas y disponibilidad)

    // Simulamos una reserva exitosa
    setReservationMessage(`Reserva exitosa: Habitación ${selectedRoom} reservada para ${selectedDates}`);
  };

  return (
    <div>
      <h2>Realizar Reserva</h2>
      <form onSubmit={handleReservationSubmit}>
        <label>
          Habitación:
          <select value={selectedRoom} onChange={handleRoomChange}>
            <option value="">Seleccione una habitación</option>
            {rooms.map((room, index) => (
              <option key={index} value={room.type}>
                {room.type}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Fechas:
          <input type="text" value={selectedDates} onChange={handleDateChange} />
        </label>
        <br />
        <button type="submit" disabled={!selectedRoom || !selectedDates}>
          Reservar
        </button>
      </form>
      <p>{reservationMessage}</p>
    </div>
  );
};

export default ReservationForm;
