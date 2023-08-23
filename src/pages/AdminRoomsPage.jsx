import { useAdmin } from "../context/AdminContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminCard } from "../components/AdminCard";

function RoomsPage() {
  const { getRoomsRequest, rooms } = useAdmin();
  
  useEffect(() => {
    getRoomsRequest();
  }, []);

  if (rooms.length === 0) return <h1>No hay habitaciones</h1>;

  return (
    <div>
      {rooms.map((room) => (
        <AdminCard key={room._id} room={room} />
      ))}
    </div>
  );
}

export default RoomsPage;
