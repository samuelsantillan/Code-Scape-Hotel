import { useAdmin } from "../context/AdminContext";
import { Link } from "react-router-dom";


function AdminCard({ room }) {
  
  const {deleteRoomRequest} = useAdmin();

  

  return (
    <>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            {/* <img src="..." alt="..." classNameName="img-fluid rounded-start" /> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{room.nameHabitation}</h5>
              <p className="card-text">
                {room.description}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {room.price}€ / noche
                </small>
              </p>
            </div>
            <button onClick={ () => {
              console.log(room._id);
              deleteRoomRequest(room._id);
            }} className="btn btn-danger">delete</button>
            <button className="btn btn-info">
            <Link to={`/admin/${room._id}`} >edit</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export { AdminCard};
