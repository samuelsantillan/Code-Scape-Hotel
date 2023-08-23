import {useState} from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoBeige from '../../assets/svg/logoBeige.svg';
import './footerStyle.css';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailIsValid, setemailIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setemailIsValid(emailRegex.test(email));
  }
  const handleSubscribe = () => {
    if (emailIsValid){
      setEmail('');
    }
  }
  return (
    <footer>
      <Container className='footerContainer'>
        <div className="footerWrap row p-5 align-content-center justify-content-around">
          <section className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center text-md-start">
            <div className="p-1">Suscribite a nuestra <em>Newsletter</em></div>
            <div className="p-1">
              <label>
              <input type="text"
            placeholder="Correo Electrónico"
            className="inputNewsletter"
            value={email}
            onChange={handleEmailChange}
           />
              </label>
             <button type="submit" className='btnNewsletter' onClick={handleSubscribe}> <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="xl" style={{color: "#ecd3bc",}} /></button>
              
            </div>
            <div className="p-1">+54 1038681 422229 / 421753</div>
            <div className="p-1 brownText">codescape@hotel.com</div>
          </section>

          <section className="mt-4 p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center bordes">
            <div className="text-center">
              <a href="/">
                <img className="img-fluid pe-5 logo" src={logoBeige} alt="Hotel Logo" />
              </a>
              <div className="p-1">
                <a href="/" className="linkFooter fw-bold fs-5">Inicio</a>
              </div>
              <div className="p-1">
                <a href="/habitaciones" className="linkFooter fs-6">Habitaciones</a>
              </div>
              <div className="p-1">
                <a href="/galeria" className="linkFooter fs-6">Galeria</a>
              </div>
              <div className="p-1">
                <a href="/nosotros" className="linkFooter fs-6">Nosotros</a>
              </div>
              <div className="p-1">
                <a href="/contacto" className="linkFooter fs-6">Contacto</a>
              </div>
            </div>
          </section>

          <section className="mt-3 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column justify-content-center justify-content-md-around align-items-center align-items-md-end text-center text-md-center">
            <div className="p-2 d-flex align-items-center justify-content-end">
              <p className="lightBrownText">Ruta 68 y Ruta 40, 4400 Cafayate, Argentina</p>
            </div>
            <div className="p-2 d-flex align-items-center justify-content-end">
              <a href="https://goo.gl/maps/y52oLiUj8wVceMyr8" className="lightBrownText locationLink">CÓMO LLEGAR <FontAwesomeIcon icon="fa-solid fa-chevron-right" /></a>
            </div>
            <div className="p-2 d-flex align-items-center">
              <ul className="list-unstyled m-0 d-flex">
                <li><a href="https://www.instagram.com/" className="linkFooter lightBrownText socialLink"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                <li><a href="https://www.facebook.com/" className="linkFooter lightBrownText socialLink"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
