import Sidebar from "react-bootstrap-sidebar-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.svg";
import { Navbar, Container } from "react-bootstrap";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { LayoutAdmin } from "../components/LayoutAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import AdminRoomsPage from "./AdminRoomsPage";
import AdminUsersPage from "./AdminUsersPage";
import NewComponentTest from "./NewComponentTest";

function Admin() {
  return (
    <>
      <LayoutAdmin>
        <Navbar className="main-header" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home" className="d-flex">
              <img src={logo} style={{ width: "220px" }} />{" "}
              <p className="ps-4" style={{ color: "#ecd3bc" }}>
                {" "}
                Administración{" "}
              </p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Sidebar expand="sm">
          <Sidebar.Collapse>
            <Sidebar.Header>
              <Sidebar.Brand>
                <img src={logo} />
              </Sidebar.Brand>
              <Sidebar.Toggle />
            </Sidebar.Header>
            <Sidebar.Body>
              <Sidebar.Nav>
                {/* <Sidebar.Nav.Link eventKey="menu_title">
<Sidebar.Nav.Icon></Sidebar.Nav.Icon>
<Sidebar.Nav.Title>Inicio</Sidebar.Nav.Title>
</Sidebar.Nav.Link> */}
                <Sidebar.Sub eventKey={0}>
                  <Sidebar.Sub.Toggle>
                    <Sidebar.Nav.Icon />
                    <Sidebar.Nav.Title>Habitaciones</Sidebar.Nav.Title>
                  </Sidebar.Sub.Toggle>
                  <Sidebar.Sub.Collapse>
                    <Sidebar.Nav>
                      <Sidebar.Nav.Link eventKey="sum_menu_title" href="/admin">
                        <Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
                        <Sidebar.Nav.Title>Nueva Habitación</Sidebar.Nav.Title>
                      </Sidebar.Nav.Link>
                      <Sidebar.Nav.Link
                        eventKey="sum_menu_title"
                        href="/admin/rooms"
                      >
                        <Sidebar.Nav.Icon>1.2</Sidebar.Nav.Icon>
                        <Sidebar.Nav.Title>Ver Habitaciones</Sidebar.Nav.Title>
                      </Sidebar.Nav.Link>
                    </Sidebar.Nav>
                  </Sidebar.Sub.Collapse>
                </Sidebar.Sub>
                {/* <Sidebar.Sub eventKey={0}>
<Sidebar.Sub.Toggle>
  <Sidebar.Nav.Icon />
  <Sidebar.Nav.Title>Users</Sidebar.Nav.Title>
</Sidebar.Sub.Toggle>
<Sidebar.Sub.Collapse>
  <Sidebar.Nav>
    <Sidebar.Nav.Link
      eventKey="sum_menu_title"
      href="/admin/user"
    >
      <Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
      <Sidebar.Nav.Title>View Users</Sidebar.Nav.Title>
    </Sidebar.Nav.Link>
    <Sidebar.Nav.Link
      eventKey="sum_menu_title"
      href="/admin/user"
    >
      <Sidebar.Nav.Icon>1.2</Sidebar.Nav.Icon>
      <Sidebar.Nav.Title>View Rooms</Sidebar.Nav.Title>
    </Sidebar.Nav.Link>
  </Sidebar.Nav>
</Sidebar.Sub.Collapse>
</Sidebar.Sub> */}
              </Sidebar.Nav>
              <Sidebar.Nav>
                <Sidebar.Nav.Link eventKey="menu_title" href="/admin/user">
                  <Sidebar.Nav.Icon></Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Usuarios</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </Sidebar.Nav>
            </Sidebar.Body>
            <Sidebar.Body className="exit d-flex ps-4">
              <Sidebar.Nav.Icon>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Sidebar.Nav.Icon>
              <Sidebar.Nav.Title>Salir</Sidebar.Nav.Title>
            </Sidebar.Body>
          </Sidebar.Collapse>
        </Sidebar>
        <main>
          <Routes>
            <Route path="" element={<AdminPage />} />
            <Route path="rooms" element={<AdminRoomsPage />} />
            <Route path="user" element={<AdminUsersPage />} />
            <Route path="users" element={<NewComponentTest />} />
          </Routes>
        </main>
      </LayoutAdmin>
    </>
  );
}

export default Admin;
