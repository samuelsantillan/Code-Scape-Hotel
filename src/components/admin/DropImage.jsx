import{ useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage} from '../firebase/config'



const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#f7f7f7",
  color: "#555555",
  outline: "none",
  transition: "border 0.24s ease-in-out",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  position: "relative",
  display: "inline-flex",
  borderRadius: 10,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const deleteButton = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: "5px",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.8)",
};

const buttonStyle = {
  marginTop: "10px",
  background: "#6e5137",
  color: "#ecd3bc",
  padding: "6px 6px",
  borderRadius: "10px",

};

function Previews({ onImageUpload , files, setFiles, loading, setLoading}) {

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    },
  });

  const handleDelete = (file) => {
    // Eliminar el archivo de la matriz
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles);
    URL.revokeObjectURL(file.preview);
  };

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);



  return (
    <section style={containerStyle}>
    {
      files.length == 0 && <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          border: "2px dashed gray", 
          borderRadius: "10px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
          color: "#555555",
          outline: "none",
          transition: "border 0.24s ease-in-out",
        }}
      >
        <input {...getInputProps()} />
        <p>Suelte los archivos, o haga clic para buscarlos</p>
      </div>
    }
      
      <aside style={thumbsContainer}>
        {files.map((file) => (
          <div style={thumb} key={file.name}>
            <div style={deleteButton} onClick={() => handleDelete(file)}>
              X
            </div>
            <div style={thumbInner}>
              <img
                src={file.preview}
                style={img}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default Previews;