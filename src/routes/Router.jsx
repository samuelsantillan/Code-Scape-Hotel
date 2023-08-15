import { Routes, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';
import Gallery from '../pages/gallery/Gallery';
import Contact from '../pages/contact/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Inicio />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/contacto" element={<Contact />} />

    </Routes>
  );
}

export default Router;