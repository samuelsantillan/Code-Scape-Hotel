import { Routes, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Inicio />} />
    </Routes>
  );
}

export default Router;