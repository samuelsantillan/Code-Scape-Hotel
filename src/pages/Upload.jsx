import { useState } from "react";
import { uploadServices } from "../api/room";
import "../assets/css/upload.css";

export const Upload = ({ setImages, images }) => {
  const [name, setName] = useState("habitation");
  const [file, setFile] = useState(null);
  const [pathImage, setPathImage] = useState("");

  const sendImage = (e) => {
    e.preventDefault();
    uploadServices(name, file).then((response) => {
      console.log("El resultado es : ", response);
    });
  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load() {
          setPathImage(reader.result);
        };
        setFile(file);
        alert("Imagen cargada correctamente");
      } else {
        console.log("El archivo no es una imagen");
      }
    }
  };

  return (
    <form>
      <div className="input-file ">
        <div className="row ">
          <div className="col-sm-1 col-md-2 "></div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
            <input
              type="file"
              placeholder="Subir imagen"
              name="image"
              onChange={onFileChange}
              className="btn btn-primary btn-lg btn-block w-100"
            />
          </div>
        </div>

        <img
          className="img-fluid img-thumbnail rounded mx-auto d-block "
          src={pathImage}
          alt="Image"
        />
      </div>
      <input
        type="text"
        placeholder="Nombre de la imagen"
        className="name-picture mt-2"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button
        type="submit"
        className="btn btn-outline-primary btn-lg btn-block"
        onClick={sendImage}
      >
        Subir imagen
      </button>
    </form>
  );
};
