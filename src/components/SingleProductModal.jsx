import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  addProductToCart,
  updateCantProducts,
  updateTotalPrice,
} from "../redux/slices/gemaSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./styles/SingleProductModalStyles.css";

function SingleProductModal({ show, handleClose, product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const navigate = useNavigate();

  useEffect(() => {
    setButtonCart("Agregar al carrito");
    setQuantity(1);
  }, [show]);

  return (
    product && (
      <Modal show={show} onHide={handleClose} size="lg">
        <div className="d-flex align-items-center container">
          <div className="col-5 divImageModel ">
            <img
              src={product.pictures[0].replaceAll(`"`, ``)}
              className="imageModel"
              alt=""
            />
          </div>
          <div className="col-6 my-5">
            <strong>
              <h2>{product.name}</h2>
              <h4>{product.price}</h4>
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
              <button
                className="addToCartBtn"
                onClick={() => {
                  if (buttonCart !== "Agregar al carrito") {
                    navigate("/cart");
                  } else {
                    dispatch(
                      addProductToCart({ id: product._id, cant: quantity })
                    );
                    dispatch(updateCantProducts(quantity));
                    dispatch(updateTotalPrice(quantity * product.price));
                    setButtonCart("Ver carrito");
                  }
                }}
              >
                {buttonCart.toUpperCase()}
              </button>{" "}
            </div>
          </div>
        </div>
      </Modal>
    )
  );
}

export default SingleProductModal;
