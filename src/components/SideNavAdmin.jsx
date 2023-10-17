import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoBeige from '../assets/svg/logoBeige.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/sideNavAdmin.css';
const SideNavAdmin = () => {
  return (
    <>
        <Navbar key={false} expand={false} className="navAdmin">
          <Container fluid className='sidenavContainer'>
            <Navbar.Brand href="/" className='order-2 mx-4'><img src={logoBeige} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
              className="offcanvasAdmin"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Panel Administrador
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navAdminBody">
                  <Nav.Link href="/admin/user">Usuarios</Nav.Link>
                  <NavDropdown
                    title="Habitaciones"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                  >
                    <NavDropdown.Item href="/admin/rooms" className='itemDropNav'>
                      1.1 Nueva habitación
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/" className='itemDropNav' >
                      1.2 Ver habitaciones
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <a href="/"><button className='btn btnSalir'><FontAwesomeIcon icon={faRightFromBracket} />Salir</button></a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default SideNavAdmin;