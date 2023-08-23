import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbarStyle.css";
import whiteLogo from "../../assets/svg/logoWhite.svg";
import beigeLogo from "../../assets/svg/logoBeige.svg";
import { useAuth } from "../../context/AuthContext";

const NavbarComponent = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 992 });
  const [expand, setExpand] = useState(isLargeScreen);
  const [scrolled, setScrolled] = useState(false);
  const [logoColor, setLogoColor] = useState("white");
  const { isAuthenticated, user } = useAuth();
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
    setLogoColor(isScrolled ? "beige" : "white");
  };
  const handleNavbarToggle = () => {
    if (!isLargeScreen) {
      setExpand(!expand);
    }
  };
  console.log(user);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setExpand(isLargeScreen);
  }, [isLargeScreen]);

  return (
    <>
      <Navbar
        expand={expand}
        onToggle={handleNavbarToggle}
        className={scrolled ? "scrolled" : ""}
        fixed="top"
      >
        <Container className="my-2">
          <Navbar.Brand href="/">
            <img
              src={logoColor === "white" ? whiteLogo : beigeLogo}
              alt="Logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="sideNavbar"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex navBody">
              <Nav>
                <Nav.Link href="/habitaciones">Habitaciones</Nav.Link>
                <Nav.Link href="/galeria">Galería</Nav.Link>
                <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
              </Nav>
              {}
              {!isAuthenticated && (
                <Nav.Link href="/login" className="my-2">
                  Iniciar Sesión
                </Nav.Link>
              )}
              {isAuthenticated && (
                <Nav.Link href="/logout" className="my-2">
                  Cerrar Sesión
                </Nav.Link>
              )}
              {isAuthenticated && user.role === 0 && (
                <Nav.Link href="/admin" className="my-2">
                  Panel Admin
                </Nav.Link>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
