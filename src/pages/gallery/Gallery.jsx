import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './galleryStyle.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const scrollableListRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollableListRef.current.offsetLeft);
    setScrollLeft(scrollableListRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - scrollableListRef.current.offsetLeft;
    const walk = (x - startX) * 3;

    scrollableListRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setStartX(0);
  };
  const images = [
    { url: 'https://i.ibb.co/F5PWr2x/exterior1.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/MCPhyVw/restaurante1.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/Yy1dLxy/comunes1.jpg', categories: ['comunes'] },
    { url: 'https://i.ibb.co/xDgJTHZ/habitacion1.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/CvnHHtm/servicios2.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/bLzmtTB/restaurante2.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/QXb0t2q/comunes2.jpg', categories: ['comunes'] },
    { url: 'https://i.ibb.co/0nMJgM7/exterior2.jpg', categories: ['exterior'] },    
    { url: 'https://i.ibb.co/sR0JvXC/restaurante3.jpg', categories: ['restaurante'] }, 
    { url: 'https://i.ibb.co/2ZFrJRn/comunes3.jpg', categories: ['comunes'] },
    { url: 'https://i.ibb.co/dJ6x6wr/servicios1.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/WVzrtyr/habitacion4.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/V9Hz7KW/restaurante4.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/N3sbnzh/servicios3.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/8dxXTNc/habitacion2.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/M6Ln9wM/habitacion5.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/YQ1JgQK/exterior3.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/TtC532y/comunes4.jpg', categories: ['comunes'] },
    { url: 'https://i.ibb.co/FnHJJ5f/restaurante5.jpg', categories: ['restaurante'] },
    { url: 'https://i.ibb.co/RzZsDJP/servicios4.jpg', categories: ['servicios'] },
    { url: 'https://i.ibb.co/QH4ZWMv/exterior4.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/sbw6vm4/habitacion3.jpg', categories: ['habitaciones'] },
    { url: 'https://i.ibb.co/P5BjHNG/exterior5.jpg', categories: ['exterior'] },
    { url: 'https://i.ibb.co/rpxxxDZ/exterior6.jpg', categories: ['exterior'] }

    


  ];
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSlideNumber(0);
    scrollableListRef.current.scrollTo({
      left: scrollableListRef.current.querySelector(`.${category}`).offsetLeft,
      behavior: 'smooth'
    });
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
      <section className='heroSection'>
        <div className='title'>
          <h1 className='titleGallery'>GALERÍA</h1>
          <div className='line' />
        </div>
      </section>
      <section className="gallerySection">
        <h4 className='gallerySectionTitle'>Galería de imágenes</h4>
        <div className="scrollCategory" ref={scrollableListRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <ul className="categories btnGroup">
            <li><button onClick={() => handleCategoryChange('todas')} className={selectedCategory === 'todas' ? 'active' : ''}>Todas</button></li>
            <li><button onClick={() => handleCategoryChange('habitaciones')} className={selectedCategory === 'habitaciones' ? 'active' : ''}>Habitaciones</button></li>
            <li><button onClick={() => handleCategoryChange('exterior')} className={selectedCategory === 'exterior' ? 'active' : ''}>Exterior</button></li>
            <li><button onClick={() => handleCategoryChange('comunes')} className={selectedCategory === 'comunes' ? 'active' : ''}>Áreas comunes</button></li>
            <li><button onClick={() => handleCategoryChange('restaurante')} className={selectedCategory === 'restaurante' ? 'active' : ''}>Restaurante</button></li>
            <li><button onClick={() => handleCategoryChange('servicios')} className={selectedCategory === 'servicios' ? 'active' : ''}>Servicios</button></li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            {filteredImages.map((image, index) => (
              <div className="col col-md-4 col-sm-6" key={index}>
                <div className="imageContainer">
                  <img
                    src={image.url}
                    alt={`Image ${index}`}
                    onClick={() => handleOpenModal(index)}
                    className="img-fluid image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
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
    </>
  );
};

export default Gallery;
