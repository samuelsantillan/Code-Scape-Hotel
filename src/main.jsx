
import React from "react";
import ReactDOM from "react-dom/client";
import RoomsPage from "./components/RoomsPage.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RoomDescription from "./components/room/RoomDescription.jsx";
import ReservationForm from "./components/room/ReservationForm.jsx";
import App from "./App.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

