import { useAdmin } from "../context/AdminContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import imageSrc from "../assets/presidencial1.jpg";
import { Col, Row } from "react-bootstrap";

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
      <div className="card mb-3">
        <Row className="row">
          <Col lg="8" xs="12">
            <img
              src={imageSrc}
              className="img-fluid rounded-start"
              style={{ width: "400px" }}
            />
          </Col>
          <Col lg="4" xs="12">
            <div className="card-body">
              <h5 className="">{room.nameHabitation}</h5>
              <p className="card-text my-5">{room.description}</p>
              <p className="card-text">
                <small className="text-muted">{room.price} USD / Noche</small>
              </p>
            </div>

            <button onClick={handleDeleteRoom} className="btn btn-danger m-1">
              Eliminar
            </button>
            <button className="btn btn-info ">
              <Link to={`/admin/${room._id}`}>Editar</Link>
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export { AdminCard };
