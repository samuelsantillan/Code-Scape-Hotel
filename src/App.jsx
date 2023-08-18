import React from "react";
import ReactDOM from "react-dom/client";
import RoomsPage from "./components/RoomsPage.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RoomDescription from "./components/room/RoomDescription.jsx";
import ReservationForm from "./components/room/ReservationForm.jsx";
import RoomProvider from "./context/RoomContext.jsx";
function App() {
  return (
    <>
      <RoomProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoomsPage />} />
            <Route path="/RoomDescription" element={<RoomDescription />} />
            <Route path="/ReservationForm" element={<ReservationForm />} />
          </Routes>
        </BrowserRouter>
      </RoomProvider>
    </>
  );
}

export default App;
