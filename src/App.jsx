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
function App() {
  const theme = "dark";
  return (
    <>
      <AdminProvider>
        <BrowserRouter>
          <LayoutAdmin>
            <Navbar
              className="main-header"
              expand="lg"
              bg={theme}
              variant={theme}
            >
              <Container fluid>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
              </Container>
            </Navbar>
            <Sidebar variant={theme} bg={theme} expand="sm">
              <Sidebar.Collapse>
                <Sidebar.Header>
                  <Sidebar.Brand>Logo</Sidebar.Brand>
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
                        <Sidebar.Nav.Title>Rooms</Sidebar.Nav.Title>
                      </Sidebar.Sub.Toggle>
                      <Sidebar.Sub.Collapse>
                        <Sidebar.Nav>
                          <Sidebar.Nav.Link
                            eventKey="sum_menu_title"
                            href="/admin"
                          >
                            <Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
                            <Sidebar.Nav.Title>New Room</Sidebar.Nav.Title>
                          </Sidebar.Nav.Link>
                          <Sidebar.Nav.Link
                            eventKey="sum_menu_title"
                            href="/admin/rooms"
                          >
                            <Sidebar.Nav.Icon>1.2</Sidebar.Nav.Icon>
                            <Sidebar.Nav.Title>View Rooms</Sidebar.Nav.Title>
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
                    <Sidebar.Nav.Link
                      eventKey="menu_title"
                      href="/admin/user"
                    >
                      <Sidebar.Nav.Icon></Sidebar.Nav.Icon>
                      <Sidebar.Nav.Title>Users</Sidebar.Nav.Title>
                    </Sidebar.Nav.Link>
                  </Sidebar.Nav>
                </Sidebar.Body>
                <Sidebar.Body>
                  
                </Sidebar.Body>
              </Sidebar.Collapse>
            </Sidebar>

            <main>
              <header>
                <h1 className="text-center">Administracion</h1>
              </header>
              <Routes>
                <Route path="/admin/:id" element={<AdminPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/rooms" element={<RoomsPage />} />
                <Route path="/admin/user" element={<AdminUsersPage />} />
              </Routes>
            </main>
          </LayoutAdmin>
        </BrowserRouter>
      </AdminProvider>
    </>
  );
}

export default App;
