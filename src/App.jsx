import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AdminProvider } from "./context/AdminContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import LoadingPage from "./pages/loading/LoadingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import RoomProvider from "./context/RoomContext";
import Login from "./pages/login/Login";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./pages/admin/Admin";
import Register from "./pages/register/Register";
import Inicio from "./pages/Inicio";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import RoomDescription from "./components/room/RoomDescription";
import RoomsPage from "./pages/RoomsPage";
import RoomUserContext from "./context/RoomUserContext";
import ReservationForm from "./components/room/ReservationForm";
import AboutUsPage from "./components/Aboutus/Aboutus";
import Error404 from "./components/Error404/Error404"

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
            <RoomUserContext>
              <RoomProvider>
                <BrowserRouter>
                  <Routes>
                    <Route
                      path="/"
                      exact
                      element={
                        <Layout>
                          <Inicio />
                        </Layout>
                      }
                    />
                    <Route
                      path="/galeria"
                      element={
                        <Layout>
                          <Gallery />
                        </Layout>
                      }
                    />
                    <Route path="*" element={<Error404 />} />
                    <Route
                      path="/contacto"
                      element={
                        <Layout>
                          <Contact />
                        </Layout>
                      }
                    />
                    <Route
                      path="/nosotros"
                      element={
                        <Layout>
                          <AboutUsPage />
                        </Layout>
                      }
                    />
                    <Route
                      path="/habitaciones/:id"
                      element={
                        <Layout>
                          <RoomsPage  />
                        </Layout>
                      }
                    />
                    <Route
                      path="/RoomDescription/:id"
                      element={
                        <Layout>
                          <RoomDescription />
                        </Layout>
                      }
                    />
                    <Route
                      path="/ReservationForm"
                      element={
                          <ReservationForm />
                      }
                    />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/admin/*" element={<Admin />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </RoomProvider>
            </RoomUserContext>
          </AdminProvider>
        </AuthProvider>
      )}
    </>
  );
};

export default App;
