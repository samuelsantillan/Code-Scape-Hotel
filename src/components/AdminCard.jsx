import { useAdmin } from "../context/AdminContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import imageSrc from "../assets/presidencial1.jpg";
import "../assets/css/admin-page.css";
import { Card, Col, Row } from "react-bootstrap";

function AdminCard({ room }) {
  const { deleteRoomRequest } = useAdmin();

  const handleDeleteRoom = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar habitación",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Eliminado!", "Tu habitación ha sido eliminada.", "success");
        deleteRoomRequest(room._id);
      }
    });
  };

  return (
    <>
      <Card lg="5" md="10" xs="12" className="mb-3 roomAdminCard">
      <Row >
        <Col lg="7" md="12" xs="12">
        <Card.Img
          src={imageSrc}
          className="img-fluid rounded-start"
        />
        </Col>
        <Col lg="5" md="10" xs="12">
        <Card.Body className="roomCardBody">
          <Card.Title>{room.nameHabitation} </Card.Title>
          <div>
          <Card.Text>
            {room.description}
          </Card.Text>
          <Card.Text>Precio: {room.price} USD / Noche</Card.Text>
          <button className="btn btnEditar">
            <Link to={`/admin/${room._id}`}>Editar</Link>
          </button>
          <button onClick={handleDeleteRoom} className="btn btnEliminar m-1">
            Eliminar
          </button>
          </div>
        </Card.Body >
        </Col>
      </Row>
      </Card>
    </>
  );
}

export { AdminCard };
