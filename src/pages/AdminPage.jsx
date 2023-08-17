import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AdminCalendar from "../components/AdminCalendar";
import FileUploadComponent from "../components/FileUploadCalendar";
import { roomRequest } from "../api/room.js";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [calendarValues, setCalendarValues] = useState([]);
  const { register, handleSubmit, setValue } = useForm();
  const { createRoom, getRoomRequest, updateRoomRequest } = useAdmin();
  const [isUpdateRoom, setIsUpdateRoom] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { room } = useAdmin();
  console.log(room);
  const handleCalendarChange = (calendarDates) => {
    setCalendarValues(calendarDates);
    console.log(calendarDates);
  };

  useEffect(() => {
    console.log(params);
    async function loadRoom() {
      if (params.id) {
        const room = await getRoomRequest(params.id);
        setValue("roomName", room.nameHabitation);
        setValue("roomType", room.type);
        setValue("roomPrice", room.price);
        setValue("roomNumber", room.numberHabitation);
        setValue("roomDetails", room.description);
        setIsUpdateRoom(true);
        // setCalendarValues(room.availableDates);
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
    // const res = await roomRequest({
    //   nameHabitation: roomName,
    //   type: roomType,
    //   price:  roomPrice,
    //   numberHabitation : roomNumber,
    //   description:  roomDetails,
    //   availableDates : calendarValues,
    //   photo : "image.jpg"
    // }

    // ).then((res) => {
    //   alert("Habitacion creada con exito ");
    //   console.log(res);

    // }).catch((err) => {
    //   console.log(err);
    //   if(err.response.status === 400){
    //     alert("El numero de habitacion ya esta registrado");
    //   }

    // });
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
      <form className="row g-3" onSubmit={handleSubmitForm}>
        <div className="col-md-12 justify-content-center">
          <h1 className="text-center">New room</h1>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputRoomName" className="form-label">
            Room Name
          </label>
          <input
            {...register("roomName", { required: true })}
            type="text"
            placeholder="roomName"
            name="roomName"
            className="form-control"
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputRoomType" className="form-label">
            Room Type
          </label>
          <select
            className="form-select"
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
        <div className="col-md-6">
          <label htmlFor="inputRoomPrice" className="form-label">
            Room Price
          </label>
          <input
            {...register("roomPrice", { required: true })}
            type="text"
            name="roomPrice"
            className="form-control"
            placeholder="roomPrice"
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputRoomNumber" className="form-label">
            Room Number
          </label>
          <input
            {...register("roomNumber", { required: true })}
            type="text"
            name="roomNumber"
            className="form-control"
            placeholder="roomNumber"
            {...(isUpdateRoom && { disabled: true })}
          ></input>
        </div>
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <AdminCalendar onCalendarChange={handleCalendarChange} />
        </div>

        <div className="col-12">
          <label htmlFor="inputRoomDetails">Room Details</label>
          <textarea
            {...register("roomDetails", { required: true })}
            name="roomDetails"
            className="form-control"
            placeholder="roomDetails"
          ></textarea>
        </div>
        <div className="col-12 mt-5">
          <FileUploadComponent />
        </div>
        <div className="col-12 mt-5 d-flex align-item-center justify-content-center">
          <input type="submit" className="btn btn-primary w-50" />
        </div>
      </form>
    </>
  );
}

export default AdminPage;
