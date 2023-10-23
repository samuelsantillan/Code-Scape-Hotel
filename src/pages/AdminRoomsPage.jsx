import { useAdmin } from "../context/AdminContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminCard } from "../components/AdminCard";

function RoomsPage() {
  const { getRoomsRequest, rooms } = useAdmin();

  useEffect(() => {
    getRoomsRequest();
  }, []);
  if (rooms.length === 0) return <><h1>No hay habitaciones</h1></>;

  return (
    <>
      
        <h1 className="mt-3">Habitaciones</h1>
        <a href="/admin/rooms" className="align-self-end mb-3"><button className="btn btnHabitaciones">Agregar habitación</button></a>
      {rooms.map((room) => (
        <AdminCard key={room._id} room={room} />
      ))}
    </>
  );
}

export default RoomsPage;
