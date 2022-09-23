import Alert from "@mui/material/Alert";
import "../../styles/AdminStyles.css";

function Images({ amountImages }) {
  return amountImages < 8 ? (
    <input
      required
      className="form-control m-5"
      type="file"
      id={`pictures${amountImages}`}
      name="pictures"
      accept="image/png, image/jpeg"
    />
  ) : (
    <div className="m-5">
      <Alert severity="warning">
        <h6>Se pueden agregar hasta 7 imágenes</h6>
      </Alert>
    </div>
  );
}

export default Images;
