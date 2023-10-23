import { Container } from "react-bootstrap";
import {Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import AdminRoomsPage from "./AdminRoomsPage";
import AdminUsersPage from "./AdminUsersPage";
import SideNavAdmin from "../../components/admin/SideNavAdmin.jsx";
import "../../assets/css/admin-page.css";

function Admin() {
  return (
    <>
      <SideNavAdmin />
      <Container fluid className="containerAdminPage ">
        <Routes>
          <Route path="/" element={<AdminRoomsPage />} />
          <Route path="/rooms" element={<AdminPage />} />
           <Route path="/:id" element={<AdminPage />} />
          <Route
            path="/user"
            element={
              <Container fluid className="containerUserPage ">
                <>
                  <h1 className="text-center title-color-userPage mt-2">ADMINISTRACIÓN</h1>
                </>
                <AdminUsersPage />
              </Container>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default Admin;
