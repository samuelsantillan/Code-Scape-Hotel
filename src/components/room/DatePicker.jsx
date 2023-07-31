import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css'; // Importa el archivo de estilos personalizados

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="date-range-picker-container">
      <h3 className="date-range-picker-title">Selecciona las fechas de reserva:</h3>
      <div className="date-picker-container">
        <div className="date-picker">
          <label htmlFor="start-date">Fecha de entrada:</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            className="form-control" // Clase para el estilo del input de fecha
          />
        </div>
        <div className="date-picker">
          <label htmlFor="end-date">Fecha de salida:</label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            minDate={startDate}
            className="form-control" // Clase para el estilo del input de fecha
          />
        </div>
      </div>
      <div className="button-container">
        <button className="btn btn-primary">Reservar ahora</button>
      </div>
    </div>
  );
};

export default DateRangePicker;