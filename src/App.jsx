import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RoomList from "./components/room/RoomList";
import ReservationForm from "./components/room/ReservationForm";
import "./App.css";
import RoomGrid from "./components/room/RoomGrid";
import NavBarBorrar from "./components/room/navbarBorrar";
import RoomPreview from "./components/room/RoomPreview";
import RoomPagePreview from "./components/RoomPagePreview";
import roomsData from "./components/room/roomsData";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Room from "./components/room/Room";
import RoomDescription from "./components/room/RoomDescription";
import Page2 from "./components/room/Page2";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Esta es la página 1</h1>
        <ul>
          <li>
            <Link to="/Page2" >Ir a la página 2</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>

    // <Router>
    //     <h1>Esta es la Página 1</h1>
    //     <div>
    //     <li>
    //       <Link to={"/Page2"} >Ir a la página 2</Link>
    //     </li>
    //     <Routes>
    //       <Route path="/Page2" Component={Borrar}/>
    //     </Routes
    //   </div>
    // </Router>
  );
};

export default App;
