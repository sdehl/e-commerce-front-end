import Alert from "@mui/material/Alert";
import "../../styles/AdminStyles.css";

function AddImage({ amountImages, index, setAmountImages, setInputList }) {
  return index < 8 ? (
    <div className="d-flex align-items-center">
      <input
        required
        className="form-control m-5"
        type="file"
        id={`pictures${amountImages}`}
        name="pictures"
        accept="image/png, image/jpeg"
      />
      <h6
        className="m-5 deleteInputImage"
        onClick={() => {
          setAmountImages(amountImages - 1);
          setInputList((prev) => prev.filter((element, i) => i !== index));
        }}
      >
        Eliminar
      </h6>
    </div>
  ) : (
    <div className="m-5">
      <Alert severity="warning">
        <h6>Se pueden agregar hasta 8 imágenes</h6>
      </Alert>
    </div>
  );
}

export default AddImage;
