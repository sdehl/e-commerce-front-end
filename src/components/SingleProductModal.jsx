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
      <div className="input-group w-auto justify-content-end align-items-center">
        <Button variant="light"> COMPRAR </Button>
        <div class="input-group justify-content-center mb-3">
          <Button
            variant="dark"
            className="btn btn-outline-secondary fs-1"
            type="button"
            id="button-addon1"
          >
            -
          </Button>
          <input
            type="number"
            className="form-control xs-2"
            placeholder="1"
            aria-label="add-remove-items"
            aria-describedby="add-remove-items"
          ></input>
          <Button
            variant="dark"
            className="btn btn-outline-secondary text-center"
            type="button"
            id="button-addon1"
          >
            <strong>+</strong>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default SingleProductModal;
