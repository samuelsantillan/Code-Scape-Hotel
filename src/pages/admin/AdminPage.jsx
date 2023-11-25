import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Previews from "../../components/admin/DropImage";
import AdminCalendar from "../../components/admin/AdminCalendar";
import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import "../../assets/css/admin-page.css";
import { PulseLoader } from "react-spinners";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function AdminPage() {
  // const [imageURL, setImageURL] = useState("");
  const [calendarValues, setCalendarValues] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const { register, handleSubmit, setValue } = useForm();
  const { createRoom, getRoomRequest, updateRoomRequest } = useAdmin();
  const [isUpdateRoom, setIsUpdateRoom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ImageCompleted, setImageCompleted] = useState(false);
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { room } = useAdmin();
  const [files, setFiles] = useState([]);
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
  }, [params.id, setValue]);

  const handleFileRemove = (fileToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((file) => file !== fileToRemove)
    );
  };

  const handleImageUploaded = async (formData) => {
    setLoading(true);
    const storage = getStorage();
    const storageRef = ref(storage, "images");
    const imageUrls = [];
    for (const file of files){
      try {
        const fileRef = ref(storageRef, `${file.name}`);
        await uploadBytes(fileRef, file);
        const imageUrl = await getDownloadURL(fileRef);
        imageUrls.push(imageUrl)
    } catch (error) {
      console.log("Error al cargar la imagen: ", error);
      setLoading(false);
      throw error;
    }
  }
  setLoading(false);
  imageComplete(formData, imageUrls)
  };

  const imageComplete = (formData, imageUrl) => {
    const roomName = formData.roomName;
    const roomType = formData.roomType;
    const roomPrice = formData.roomPrice;
    const roomNumber = formData.roomNumber;
    const roomDetails = formData.roomDetails;
    try {
      if (isUpdateRoom) {
        updateRoomRequest(params.id, {
          nameHabitation: roomName,
          type: roomType,
          price: roomPrice,
          numberHabitation: roomNumber,
          description: roomDetails,
          availableDates: calendarValues,
          photos: [imageUrl],
        });
      } else {
        if (imageUrl !== "") {
          createRoom({
            nameHabitation: roomName,
            type: roomType,
            price: roomPrice,
            numberHabitation: roomNumber,
            description: roomDetails,
            availableDates: calendarValues,
            photos: [imageUrl],
          });
          setTimeout(() => {
            setLoading(false);
            navigate("/admin/");
          }, 3000);
        } else {
          alert("La imagen no se ha cargado correctamente");
        }
      }
    } catch (error) {
      console.error("Error al cargar la imagen o enviar los datos: ", error);
    }
  };

  const handleSubmitForm = handleSubmit(async (formData) => {
    if (files.length > 0) {
      handleImageUploaded(formData);
    } else {
      alert("Debe agregar al menos una imagen");
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
          <Previews
            uploadedImages={selectedImages}
            // onImageUpload={handleImageUpload}
            onFileRemove={handleFileRemove}
            files={files}
            setFiles={setFiles}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
        <div className="col-12 mt-5 d-flex align-item-center justify-content-center">
          {loading && <PulseLoader className="my-3" color="#FFFFFF" />}
          {files.length > 0 && (
            <input
              type="submit"
              className="btn btnCargar my-5 "
              value="CARGAR HABITACIÓN"
            />
          )}
        </div>
      </form>
    </>
  );
}

export default AdminPage;
