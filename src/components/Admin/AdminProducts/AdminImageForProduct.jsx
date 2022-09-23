import Alert from "@mui/material/Alert";
import "../../styles/AdminStyles.css";

function Images({ amountImages, inputList, setInputList, key }) {
   console.log(inputList);
  return amountImages < 8 ? (
    <div className="d-flex">
      <input
        required
        className="form-control m-5"
        type="file"
        id={`pictures${amountImages}`}
        name="pictures"
        accept="image/png, image/jpeg"
      />
      <h6
        onClick={() => {
          console.log(inputList);
          if (inputList.length === 0) {
           // console.log(inputList);
           // setInputList([]);
          } else {
            //console.log(inputList);
            const newArrayOfInputFiles = inputList.filter((element) => {
              return element.key !== key;
            });
            //setInputList(newArrayOfInputFiles);
          }
        }}
      >
        Eliminar
      </h6>
    </div>
  ) : (
    <div className="m-5">
      <Alert severity="warning">
        <h6>Se pueden agregar hasta 7 imágenes</h6>
      </Alert>
    </div>
  );
}

export default Images;
