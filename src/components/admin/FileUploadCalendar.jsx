import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { getDroppedOrSelectedFiles } from "html5-file-selector";

const sendImages = "https://httpbin.org/post";

const FileUploadComponent = () => {
  const fileParams = ({ meta }) => {
    return { url: sendImages };
  };
  
  const onSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
  };
  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };
  const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const textMsg = files.length > 0 ? "Upload Again" : "Seleccionar imágenes";
    return (
      <label className="btn btn-danger mt-4">
        {textMsg}
        <input
          style={{ display: "none" }}
          type="file"
          accept={accept}
          multiple
          onChange={(e) => {
            getFilesFromEvent(e).then((chosenFiles) => {
              onFiles(chosenFiles);
            });
          }}
        />
      </label>
    );
  };
  return (
    <Dropzone
      onSubmit={onSubmit}
      onChangeStatus={onFileChange}
      InputComponent={selectFileInput}
      getUploadParams={fileParams}
      getFilesFromEvent={getFilesFromEvent}
      accept="image/*,audio/*,video/*"
      maxFiles={2}
      inputContent="Drop A File"
      styles={{
        dropzone: { width: 600, height: 400 },
        dropzoneActive: { borderColor: "green" },
      }}
    />
  );
};
export default FileUploadComponent;
