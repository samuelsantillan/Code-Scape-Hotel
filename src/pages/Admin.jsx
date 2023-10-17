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
import SideNavAdmin from "../components/SideNavAdmin";
import "../assets/css/admin-page.css";
import UploadContainer from "./UploadContainer";

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
          <Route path="/test" element={<UploadContainer />} />
        </Routes>
      </Container>
    </>
  );
}

export default Admin;
