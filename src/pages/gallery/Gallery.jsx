import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import FadeIn from '../../animations/FadeIn'
import './galleryStyle.css';
import ScrollToTopButton from '../../components/scrollToTop/ScrollToTopButton';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const images = [
    { url: 'https://i.ibb.co/F5PWr2x/exterior1.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/MCPhyVw/restaurante1.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/Yy1dLxy/comunes1.jpg', categories: ['interior'] },
    { url: 'https://i.ibb.co/xDgJTHZ/habitacion1.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/CvnHHtm/servicios2.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/bLzmtTB/restaurante2.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/QXb0t2q/comunes2.jpg', categories: ['interior'] },
    { url: 'https://i.ibb.co/0nMJgM7/exterior2.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/sR0JvXC/restaurante3.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/2ZFrJRn/comunes3.jpg', categories: ['interior'] },
    { url: 'https://i.ibb.co/dJ6x6wr/servicios1.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/WVzrtyr/habitacion4.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/V9Hz7KW/restaurante4.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/N3sbnzh/servicios3.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/8dxXTNc/habitacion2.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/M6Ln9wM/habitacion5.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/YQ1JgQK/exterior3.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/TtC532y/comunes4.jpg', categories: ['interior'] },
    { url: 'https://i.ibb.co/FnHJJ5f/restaurante5.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/RzZsDJP/servicios4.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/QH4ZWMv/exterior4.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/sbw6vm4/habitacion3.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/P5BjHNG/exterior5.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/rpxxxDZ/exterior6.jpg', categories: ['exterior'] }
  ];



  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    let prevIndex = (slideNumber - 1 + filteredImages.length) % filteredImages.length;
    setSlideNumber(prevIndex);
  };

  const nextSlide = () => {
    let nextIndex = (slideNumber + 1) % filteredImages.length;
    setSlideNumber(nextIndex);
  };

  const filteredImages = selectedCategory === 'todas'
    ? images
    : images.filter(image => image.categories.includes(selectedCategory));

  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className='heroSection'>
          <div className='title fadeInText'>
            <h1 className='titleGallery'>GALERÍA</h1>
            <div className='line' />
          </div>
        </section>
        <section className="gallerySection">
          <FadeIn>
            <h4 className='gallerySectionTitle'>Galería de imágenes</h4>
          </FadeIn>
          <div className="scrollCategory">
            <ul className="categories btnGroup">
              {['todas', 'habitaciones', 'exterior', 'interior', 'restaurante', 'servicios'].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={selectedCategory === category ? 'active' : ''}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="container">
            <div className="row">
              {filteredImages.map((image, index) => (
                <div className="col col-md-4 col-sm-6 col-6" key={index}>
                  <div className="imageContainer">
                    <FadeIn delay={1}>
                      <img
                        src={image.url}
                        alt={`Image ${index}`}
                        onClick={() => handleOpenModal(index)}
                        className="img-fluid imageGallery"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {openModal && (
            <div className='sliderWrap'>
              <FontAwesomeIcon icon={faX} className='btnClose' onClick={handleCloseModal} />
              <FontAwesomeIcon icon={faArrowLeftLong} className='btnPrev' onClick={prevSlide} />
              <FontAwesomeIcon icon={faArrowRightLong} className='btnNext' onClick={nextSlide} />
              <div className='fullScreenImage'>
                <img src={filteredImages[slideNumber].url} alt='' />
              </div>
            </div>
          )}
        </section>
        <ScrollToTopButton />
      </motion.div>
    </>
  );
};

export default Gallery;
