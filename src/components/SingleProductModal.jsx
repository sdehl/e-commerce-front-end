import { Button } from "react-bootstrap";

function SingleProductModal(props) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // <Button variant="primary" onClick={handleShow}>
  //</Button>
  // TODO ESTO VA EN EL PRODUCTCARD

  return (
    <div className="d-flex flex-column">
      <strong>
        <h2>-PRE VENTA- DESAGÜE DE PISO ESCONDIDO CUADRADO 100X100MM BRONCE</h2>
      </strong>
      <h4>U$S 97</h4>
      <div class="input-group w-auto justify-content-end align-items-center">
        <Button> COMPRAR </Button>
        <input
          type="text"
          id="quantity_6319f06b0aa64"
          class="qodef-quantity-input input-text qty text"
          data-step="1"
          data-min="1"
          data-max=""
          name="quantity"
          value="1"
          title="Qty"
          size="4"
          placeholder=""
          inputmode="numeric"
        ></input>
      </div>
    </div>
  );
}

export default SingleProductModal;
