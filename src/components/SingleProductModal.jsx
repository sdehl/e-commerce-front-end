import { useState } from "react";
import { Modal } from "react-bootstrap";

function SingleProductModal({ show, handleClose }) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // <Button variant="primary" onClick={handleShow}>
  //</Button>
  // TODO ESTO VA EN EL PRODUCTCARD

  const [quantity, setQuantity] = useState(1);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <div className="d-flex align-items-center">
        <div className="col-5 ">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2022/09/G04-DES-100X100-BZ-1.1-scaled.jpg"
            }
            className="d-block w-50"
            alt=""
          />
        </div>
        <div className="col-6 my-5">
          <strong>
            <h2>
              -PRE VENTA- DESAGÜE DE PISO ESCONDIDO CUADRADO 100X100MM BRONCE
            </h2>
            <h4>U$S 97</h4>
          </strong>
          <div className="d-flex justify-content-space-between  my-5">
            <div className="d-flex elemntsPrice quantityBox">
              <span
                className="add-substract pr-2"
                onClick={() => {
                  quantity > 1 && setQuantity(quantity - 1);
                }}
              >
                -
              </span>
              <input
                type="number"
                min="0"
                value={quantity}
                className="input"
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    setQuantity(e.target.value);
                  }
                }}
              ></input>
              <span
                className="add-substract pr-2"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </span>
            </div>

            <button className="descubrir px-2"> AGREGAR AL CARRITO </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SingleProductModal;
