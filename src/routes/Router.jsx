import { Routes, Route } from "react-router-dom";
import Contact from '../pages/contact/Contact';

const Router = () => {
  return (
    <Routes>

      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default Router;