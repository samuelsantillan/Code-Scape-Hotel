import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Room.css'
import './IconContainer'
import './roomsData'
import {  FaShower, FaHips, FaHotjar, FaAd} from 'react-icons/fa';
import IconContainer from './IconContainer';


const Room = ({ roomData }) => {
  const { type, price, availableDates, images } = roomData;

  return (
    <div className='card' >
      <div className='card-body'>
        <h2 className='font-title'>{type}</h2>
        {/* <p className='card-text color-fonts'> Precio: {price}</p> */}
        <Carousel>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Imagen ${index}`}/>
                </div>
            ))}
        </Carousel>
        <h1 className='font-title'>Detalles</h1>
        <div className='room-container'>
          <div className='room-element'>
            <IconContainer icon={<FaShower />} name='Ducha' />
          </div>
          <div className='room-element'>
            <IconContainer icon={<FaHotjar />} name='Calefacción' />
          </div>
          <div className='room-element'>
            <IconContainer icon={<FaAd />} name='Balcón' />
          </div>
          <div className='room-element'>
            <IconContainer icon={<FaHips />} name='Cama Doble' />
        </div>
      </div>
        <div className='text-center '>
          <button className='btn btn-primary '>Realizar Reserva</button>
        </div>  
      </div>
    </div>
  );
};

export default Room;
