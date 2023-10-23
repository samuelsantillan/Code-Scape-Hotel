import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'
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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
    };
    try {
      const response = await fetch("http://localhost:3000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        Swal.fire({
          title: "¡Te suscribiste correctamente!",
          text: "Gracias por suscribirte! Pronto recibirás las últimas novedades y ofertas exclusivas",
          icon: "success",
          color: '#faf8f4',
          background: '#1d130c'
        }

        );
        setEmail("");
      } else {
        console.error("Error al enviar suscripcion");
        Swal.fire({
          title: "Hubo un error!",
          text: "Por favor intentar nuevamente",
          icon: "error",
          color: '#faf8f4',
          background: '#1d130c'
        }

        );
      }
      setEmail("");
    } catch (e) {
      console.error("Error al enviar la suscripción");
      if (email.trim() === '') {
        Swal.fire({
          title: "Error",
          text: "El campo de correo electrónico no puede estar vacío",
          icon: "error",
          color: '#faf8f4',
          background: '#1d130c'
        });
        return;
      }
      setEmail("");
    }
    if (!emailIsValid) {
      Swal.fire({
        title: "¡Error!",
        text: "El formato del correo electrónico no es válido",
        icon: "error",
        color: '#faf8f4',
        background: '#1d130c'
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });


      if (response.ok) {
        Swal.fire({
          title: "¡Suscrito Correctamente!",
          text: "¡Gracias por suscribirte! Pronto recibiras novedades y ofertas únicas",
          icon: "success",
          color: '#faf8f4',
          background: '#1d130c'
        });
        setEmail("");
      } else {
        const data = await response.json();
        Swal.fire({
          title: "¡Hubo un error!",
          text: data.message,
          icon: "error",
          color: '#faf8f4',
          background: '#1d130c'
        });
        setEmail("");
      }
    } catch (e) {
      Swal.fire({
        title: "Hubo un error!",
        text: "Por favor intentar nuevamente",
        icon: "error",
        color: '#faf8f4',
        background: '#1d130c'
      });
      setEmail("");
    }
  };
  return (
    <footer>
      <Container className='footerContainer' fluid>
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
              <button type="submit" className='btnNewsletter' onClick={handleSubscribe} disabled={!emailIsValid}> <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="xl" style={{ color: "#ecd3bc", }} required /></button>
              {!emailIsValid && email.length > 0 && <p className="errorText">El formato del correo electrónico no es válido</p>}
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

            <p className="lightBrownText">Ruta 68 y Ruta 40, 4400 Cafayate, Argentina</p>
            <div className="p-2 d-flex align-items-center">
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
