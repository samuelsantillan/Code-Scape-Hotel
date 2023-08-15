import { Routes, Route } from "react-router-dom";
import Contact from '../pages/contact/Contact';
import Inicio from '../pages/Inicio';

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Inicio />} />
     <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default Router;