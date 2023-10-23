import { Upload } from "./Upload";
import { ListImage } from "./ListImage";


function UploadContainer() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <Upload />
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadContainer;
