import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AdminCalendar from "../components/AdminCalendar";
import FileUploadComponent from "../components/FileUploadCalendar";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import "../assets/css/admin-page.css";
function AdminPage() {
  const [calendarValues, setCalendarValues] = useState([]);
  const { register, handleSubmit, setValue } = useForm();
  const { createRoom, getRoomRequest, updateRoomRequest } = useAdmin();
  const [isUpdateRoom, setIsUpdateRoom] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { room } = useAdmin();
  const handleCalendarChange = (calendarDates) => {
    setCalendarValues(calendarDates);
  };

  useEffect(() => {
    async function loadRoom() {
      if (params.id) {
        const room = await getRoomRequest(params.id);
        setValue("roomName", room.nameHabitation);
        setValue("roomType", room.type);
        setValue("roomPrice", room.price);
        setValue("roomNumber", room.numberHabitation);
        setValue("roomDetails", room.description);
        setIsUpdateRoom(true);
      }
    }
    loadRoom();
  }, []);

  const handleSubmitForm = handleSubmit(async (formData) => {
    const roomName = formData.roomName;
    const roomType = formData.roomType;
    const roomPrice = formData.roomPrice;
    const roomNumber = formData.roomNumber;
    const roomDetails = formData.roomDetails;

    if (params.id) {
      updateRoomRequest(params.id, {
        nameHabitation: roomName,
        type: roomType,
        price: roomPrice,
        numberHabitation: roomNumber,
        description: roomDetails,
        availableDates: calendarValues,
        photo: "image.jpg",
      });
      navigate("/admin/rooms");
    } else {
      createRoom({
        nameHabitation: roomName,
        type: roomType,
        price: roomPrice,
        numberHabitation: roomNumber,
        description: roomDetails,
        availableDates: calendarValues,
        photo: "image.jpg",
      });
      navigate("/admin/rooms");
    }
  });

  return (
    <>
        <div className="col-md-12 text-center m-4">
          <h1>Agregar habitación</h1>
        </div>
      <form className="row rowFormAdmin " onSubmit={handleSubmitForm}>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputRoomName" className="form-label">
              Nombre de Habitación
            </label>
            <input
              {...register("roomName", { required: true })}
              type="text"
              id="inputRoomName"
              className="form-control"
              placeholder="Nombre"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputRoomType" className="form-label">
              Tipo de Habitación
            </label>
            <select
              className="form-select "
              aria-label="Default select example"
              {...register("roomType")}
              onChange={(e) => setValue("roomType", e.target.value)}
            >
              <option value="Estandar">Estandar</option>
              <option value="Suite-Ejecutiva">Suite-Ejecutiva</option>
              <option value="Suite-Presidencial">Suite-Presidencial</option>
              <option value="Familiar">Familiar</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputRoomPrice" className="form-label">
              Precio de Habitación
            </label>
            <input
              {...register("roomPrice", { required: true })}
              type="text"
              id="inputRoomPrice"
              className="form-control"
              placeholder="Precio"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputRoomNumber" className="form-label">
              Número de Habitación
            </label>
            <input
              {...register("roomNumber", { required: true })}
              type="text"
              id="inputRoomNumber"
              className="form-control"
              placeholder="Número"
              {...(isUpdateRoom && { disabled: true })}
            />
          </div>
        </div>
        <div className="col-md-12 d-flex align-items-center justify-content-center my-4">
          <AdminCalendar onCalendarChange={handleCalendarChange} />
        </div>

        <div className="col-12">
          <label htmlFor="inputRoomDetails">Detalles de Habitación</label>
          <textarea
            {...register("roomDetails", { required: true })}
            name="roomDetails"
            className="form-control"
            placeholder="Detalles"
          ></textarea>
        </div>
        <div className="col-12 mt-5">
          <FileUploadComponent />
        </div>
        <div className="col-12 mt-5 d-flex align-item-center justify-content-center">
          <input
            type="submit"
            className="btn btnCargar"
            value="CARGAR HABITACIÓN"
          />
        </div>
      </form>
    </>
  );
}

export default AdminPage;
