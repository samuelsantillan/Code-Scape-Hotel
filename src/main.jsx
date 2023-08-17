import React from "react";
import ReactDOM from "react-dom/client";
import RoomsPage from "./components/RoomsPage.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RoomDescription from "./components/room/RoomDescription.jsx";
import ReservationForm from "./components/room/ReservationForm.jsx";

const router = createBrowserRouter([
  {
    path: "/RoomsPage",
    element: (
      <div>
        <RoomsPage />
      </div>
    ),
  },
  {
    path: "/RoomDescription",
    element: (
      <div>
        <RoomDescription />
      </div>
    ),
  },
  {
    path: "/ReservationForm",
    element: (
      <div>
        <ReservationForm />
      </div>
    )
  },
  {
    path: "/ReservationForm",
    element: (
      <div>
        <ReservationForm />
      </div>
    )
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
