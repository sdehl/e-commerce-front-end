import { useEffect, useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { addProductToCart, updateCantProducts, updateTotalPrice } from "../redux/slices/gemaSlice";
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
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-6 d-flex flex-column justify-content-center">
                <Carousel variant="dark">
                  {product.pictures.map((picture, index) => {
                    return (
                      <Carousel.Item key={index}>
                        {index === 0 ? (
                          <img
                            className="productImg"
                            src={picture.replaceAll(`"`, ``)}
                            alt="Many product images"
                          />
                        ) : (
                          <img className="productImg" src={picture} alt="Many product images" />
                        )}
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              <div className="col-6 d-flex flex-column justify-content-center">
                <h1>{product.name}</h1>
                <h5>U$S {product.price}</h5>
                <p className="productStock mb-5">
                  {" "}
                  {product.stock > 0 ? "HAY STOCK" : "NO HAY STOCK"}
                </p>
                {product.stock > 0 && (
                  <>
                    <div className="d-lg-flex">
                      <div className="quantityBtnModal m-2">
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
                      <div className="divButtonCartModal  m-2">
                        {" "}
                        <button
                          className="addToCartBtnModal"
                          onClick={() => {
                            if (buttonCart !== "Agregar al carrito") {
                              navigate("/cart");
                            } else {
                              dispatch(
                                addProductToCart({
                                  id: product._id,
                                  cant: quantity,
                                  slug: product.slug,
                                }),
                              );
                              dispatch(updateCantProducts(quantity));
                              dispatch(updateTotalPrice(quantity * product.price));
                              setButtonCart("Ver carrito");
                            }
                          }}
                        >
                          {buttonCart.toUpperCase()}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  );
}

export default SingleProductModal;
