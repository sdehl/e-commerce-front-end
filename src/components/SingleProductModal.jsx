import { Button, Modal } from "react-bootstrap";

function SingleProductModal({ show, handleClose }) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // <Button variant="primary" onClick={handleShow}>
  //</Button>
  // TODO ESTO VA EN EL PRODUCTCARD

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <div className="d-flex align-items-center">
        <img
          src={
            "https://www.gemainteriores.com/wp-content/uploads/2022/09/G04-DES-100X100-BZ-1.1-scaled.jpg"
          }
          className="d-block w-50"
          alt=""
        />
        <strong>
          <h2>
            -PRE VENTA- DESAGÜE DE PISO ESCONDIDO CUADRADO 100X100MM BRONCE
          </h2>
          <h4>U$S 97</h4>
        </strong>
      </div>
      <div class="input-group w-auto justify-content-end align-items-center">
        <Button variant="light"> COMPRAR </Button>
        <div class="input-group mb-3">
          <Button
            variant="dark"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Button
          </Button>
          <input
            type="number"
            class="form-control"
            placeholder=""
            aria-label="add-remove-items"
            aria-describedby="add-remove-items"
          ></input>
          <Button
            variant="dark"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Button
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default SingleProductModal;
