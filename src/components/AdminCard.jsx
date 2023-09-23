import { useAdmin } from "../context/AdminContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function AdminCard({ room }) {
  const { deleteRoomRequest } = useAdmin();

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            {/* <img src="..." alt="..." classNameName="img-fluid rounded-start" /> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{room.nameHabitation}</h5>
              <p className="card-text">{room.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {room.price} USD / Noche
                </small>
              </p>
            </div>
            <button
              onClick={() => {
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
                    Swal.fire(
                      "¡Eliminado!",
                      "Tu habitación ha sido eliminada.",
                      "success"
                    );
                    deleteRoomRequest(room._id);
                  }
                });
              }}
              className="btn btn-danger m-1"
            >
              Eliminar
            </button>
            <button className="btn btn-info">
              <Link to={`/admin/${room._id}`}>Editar</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { AdminCard };
