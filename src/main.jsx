import React from "react";
import ReactDOM from "react-dom/client";
import RoomsPage from "./components/RoomsPage.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RoomDescription from "./components/room/RoomDescription.jsx";
import ReservationForm from "./components/room/ReservationForm.jsx";
import App from "./app.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
