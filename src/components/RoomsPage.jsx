import React from "react";
import "../App.css";
import RoomPagePreview from "./RoomPagePreview";
import Footer from "./Footer/Footer";
import NavbarComponent from "./Navbar/NavbarComponent";


const RoomsPage = () => {
  return (
      <>
        <NavbarComponent/>
        <RoomPagePreview/>
        <Footer/>
      </>
  );
};

export default RoomsPage;
