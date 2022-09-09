import {
  addProductToCart,
  updateCantProducts,
} from "../redux/slices/gemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SingleProductModal from "./SingleProductModal";
import Modal from "react-bootstrap";

function ProductCard({ product, handleShow }) {
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredPicture = product.pictures[0].replaceAll(`"`, ``);

  return (
    <div className="card p-3 border-0 cardCss">
      <img
        src={filteredPicture}
        className="card-img-top imageProduct"
        alt="..."
      ></img>
      <div id="button-div" className="d-flex flex-column align-items-center">
        <button
          className="addToCart"
          onClick={() => {
            if (buttonCart !== "Agregar al carrito") {
              //  Navigate("/cart");
              navigate("/");
            } else {
              console.log(product._id);
              dispatch(addProductToCart({ id: product._id, cant: 1 }));
              dispatch(updateCantProducts(1));
              setButtonCart("Ver carrito");
            }
          }}
        >
          {buttonCart.toUpperCase()}
        </button>
        <button
          className="addToCart"
          onClick={() => {
            handleShow();
          }}
        >
          QUICK VIEW
        </button>
      </div>

      {console.log(product._id)}
      <div className="card-body">
        <Link className="product-title-link" to={`/product/${product._id}`}>
          <h6 className="product-title">{product.name.toUpperCase()}</h6>
        </Link>
        <h4 className="product-price mt-4">{`U$S ${product.price}`}</h4>
      </div>
    </div>
  );
}
export default ProductCard;
