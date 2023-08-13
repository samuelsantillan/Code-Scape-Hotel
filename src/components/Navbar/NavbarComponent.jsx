import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import "./navbarStyle.css";
import whiteLogo from '../../assets/svg/logoWhite.svg';
import beigeLogo from '../../assets/svg/logoBeige.svg';
const NavbarComponent = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 992 });
  const [expand, setExpand] = useState(isLargeScreen);
  const [scrolled, setScrolled] = useState(false);
  const [logoColor, setLogoColor] = useState('white');

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
    setLogoColor(isScrolled ? 'beige' : 'white');
  };
  const handleNavbarToggle = () => {
    if (!isLargeScreen) {
      setExpand(!expand);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setExpand(isLargeScreen);
  }, [isLargeScreen]);

  return (
    <>
      <Navbar expand={expand} onToggle={handleNavbarToggle} className={scrolled ? 'scrolled' : ''} fixed="top">
        <Container className="my-2">
          <Navbar.Brand href="#"><img src={logoColor === 'white' ? whiteLogo : beigeLogo} alt="Logo" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end" className="sideNavbar"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex navBody'>
              <Nav>
                <Nav.Link href="#action1">Habitaciones</Nav.Link>
                <Nav.Link href="#action2">Galería</Nav.Link>
                <Nav.Link href="#action2">Nosotros</Nav.Link>
                <Nav.Link href="#action2">Contacto</Nav.Link>
              </Nav>
              <Nav.Link className="my-2">Iniciar Sesión</Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
