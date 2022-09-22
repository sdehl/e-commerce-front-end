import { addProductToCart, updateCantProducts, updateTotalPrice } from "../redux/slices/gemaSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function ProductCard({ product, handleShow }) {
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //we filter the pictures to avoid errors that may appear
  let filteredPicture;
  if (product.pictures.length > 0) {
    filteredPicture = product.pictures[0].replaceAll(`"`, ``);
  }

  return filteredPicture && (
    <div className="card p-3 border-0 cardCss">
      <img
        src={filteredPicture ? filteredPicture : "https://wallpaperaccess.com/full/1756496.jpg"}
        className="card-img-top imageProduct"
        alt="..."
      ></img>

      <div id="button-div" className="d-flex flex-column align-items-center">
        {product.stock > 0 && (
          <button
            className="addToCart"
            onClick={() => {
              if (buttonCart !== "Agregar al carrito") {
                navigate("/cart");
              } else {
                dispatch(addProductToCart({ id: product._id, cant: 1, slug: product.slug }));
                dispatch(updateCantProducts(1));
                dispatch(updateTotalPrice(product.price));
                setButtonCart("Ver carrito");
              }
            }}
          >
            {buttonCart.toUpperCase()}
          </button>
        )}
        <button
          className="addToCart"
          onClick={() => {
            handleShow(product);
          }}
        >
          QUICK VIEW
        </button>
      </div>

      <div className="card-body">
        <Link className="product-title-link" to={`/product/${product.slug}`}>
          <h6 className="product-title">{product.name.toUpperCase()}</h6>
        </Link>
        <h4 className="product-price mt-4">{`U$S ${product.price}`}</h4>
      </div>
    </div>
  );
}
export default ProductCard;
