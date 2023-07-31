import React from 'react';
import Room from './Room'; // Importa el componente Room correctamente (con la extensión .jsx)
import IconContainer from './IconContainer'; // Importa el componente IconContainer correctamente (con la extensión .jsx)
import roomsData from './roomsData'; // Importa los datos de habitaciones utilizando 'import roomsData from'
import { FaShower, FaHips, FaHotjar, FaAd } from 'react-icons/fa'; // Importa los iconos correctamente

const RoomGrid = () => {
    return (
        <div className="container">
            <div className="row">
                {roomsData.map((room, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Room roomData={room} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoomGrid;