import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RoomPreview from "./components/room/RoomPreview.jsx";
import RoomPagePreview from "./components/RoomPagePreview.jsx";
import RoomDescription from "./components/room/RoomDescription.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
