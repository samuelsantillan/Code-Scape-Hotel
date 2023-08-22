import React from 'react';
import Room from './Room';

const RoomList = ({ rooms }) => {
  return (
    <div>
      {rooms.map((room, index) => (
        <Room key={index} roomData={room} />
      ))}
    </div>
  );
};

export default RoomList;