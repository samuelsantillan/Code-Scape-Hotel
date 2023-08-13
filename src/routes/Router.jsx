import { Routes, Route } from "react-router-dom";
import Gallery from '../pages/gallery/Gallery';

const Router = () => {
  return (
    <Routes>
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
  );
}

export default Router;