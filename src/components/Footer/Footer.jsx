import './footerStyle.css';
import { Container } from 'react-bootstrap';
import logoBeige from '../../assets/svg/logoBeige.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footerWrap row p-5 align-content-center justify-content-around">
          <section className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center text-md-start">
            <div className="p-1">Suscribite a nuestra <em>Newsletter</em></div>
            <div className="p-1">
              <label>
                <input type="text" placeholder="Correo Electrónico" />
              </label>
            </div>
            <div className="p-1">+54 1038681 422229 / 421753</div>
            <div className="p-1 brownText">codescape@hotel.com</div>
          </section>

          <section className="mt-4 p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center bordes">
            <div className="text-center">
              <a href="index.html">
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
              <a href="/como-llegar" className="brownText">CÓMO LLEGAR</a>
            </div>
            <div className="p-2 d-flex align-items-center justify-content-end">
              <ul className="list-unstyled m-0">
                <li><a href="https://www.instagram.com/" className="linkFooter brownText">Instagram</a></li>
                <li><a href="https://www.facebook.com/" className="linkFooter brownText">Facebook</a></li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
