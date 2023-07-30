import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Room.css'
import './IconContainer'
import {  FaShower, FaHips, FaHotjar, FaAd} from 'react-icons/fa';
import IconContainer from './IconContainer';


const Room = ({ roomData }) => {
  const { type, price, availableDates, images } = roomData;

  return (
    <div className='card mb-4 ' >
      <div className='card-body background-color-page '>
        <h1 className='color-fonts'>{type}</h1>
        <p className='card-text color-fonts'> Precio: {price}</p>
        <Carousel>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Imagen ${index}`}/>
                </div>
            ))}
        </Carousel>
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
        
      </div>
    </div>
  );
};

export default Room;
