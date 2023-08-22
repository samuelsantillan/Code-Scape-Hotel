import AdminPage from "./pages/AdminPage";
import RoomsPage from "./pages/AdminRoomsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AdminProvider } from "./context/AdminContext";
import Sidebar from "react-bootstrap-sidebar-menu";
import "./assets/css/admin-aside.scss";
import { LayoutAdmin } from "./components/LayoutAdmin";
import { Navbar, Container } from "react-bootstrap";
import AdminUsersPage from "./pages/AdminUsersPage";
import NewComponentTest from "./pages/NewComponentTest";
import logo from "./assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Router from "./routes/Router";
import Layout from "./layout/Layout";
import LoadingPage from "./pages/loading/LoadingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import RoomProvider from "./context/RoomContext";

import Login from "./pages/login/Login";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "./pages/Admin";
import Register from "./pages/register/Register";

import Inicio from "./pages/Inicio";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import RoomDescription from "./components/room/RoomDescription";
import RoomsPage from "./components/RoomsPage";
import ReservationForm from "./components/room/ReservationForm";

library.add(fas, fab);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = "dark";
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <AuthProvider>
      <AdminProvider>
          <RoomProvider>
            <BrowserRouter>
              <Layout>
              <Routes>
                  <Route path="/" exact element={<Inicio />} />
                  <Route path="/galeria" element={<Gallery />} />
                  <Route path="/contacto" element={<Contact />} />
                  <Route path="/habitaciones" element={<RoomsPage />} />
                  <Route
                    path="/RoomDescription/:id"
                    element={<RoomDescription />}
                  />
                  <Route
                    path="/ReservationForm"
                    element={<ReservationForm />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                  </Route>
          <LayoutAdmin>
            <Navbar
              className="main-header"
              expand="lg"
            >
              <Container fluid>
                <Navbar.Brand href="#home" className="d-flex"><img src={logo} style={{ width: '220px' }} /> <p className="ps-4" style={{ color: '#ecd3bc' }}> Administración  </p></Navbar.Brand>
              </Container>
            </Navbar>
            <Sidebar expand="xs">
              <Sidebar.Collapse>
                <Sidebar.Header>
                  <Sidebar.Brand><img src={logo} /></Sidebar.Brand>
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
                          <Sidebar.Nav.Link
                            eventKey="sum_menu_title"
                            href="/admin"
                          >
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
                <Sidebar.Nav.Icon><FontAwesomeIcon icon={faRightFromBracket} /></Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>Salir</Sidebar.Nav.Title>
                </Sidebar.Body>
              </Sidebar.Collapse>
            </Sidebar>
                    
            <main>
              <Routes>
                <Route path="/admin/:id" element={<AdminPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/rooms" element={<RoomsPage />} />
                <Route path="/admin/user" element={<AdminUsersPage />} />
                <Route path="/admin/users" element={<NewComponentTest />} />
              </Routes>
            </main>
          </LayoutAdmin>
                </Routes>
              </Layout>
            </BrowserRouter>
          </RoomProvider>
      </AdminProvider>
        </AuthProvider>
      )}
    </>
  );
};


export default App;
