import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Gallery from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";
import RoomDescription from "../components/room/RoomDescription";
import RoomsPage from "../components/RoomsPage";
import ReservationForm from "../components/room/ReservationForm";
const Router = () => {
  return (
    <>
      <Route path="/" exact element={<Inicio />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/habitaciones" element={<RoomsPage />} />
      <Route path="/RoomDescription/:id" element={<RoomDescription />} />
      <Route path="/ReservationForm" element={<ReservationForm />} />
    </>
  );
};

export default Router;
