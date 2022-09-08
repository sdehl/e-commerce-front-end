import { addProductToCart } from "../redux/slices/gemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductCard({product}) {
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredPicture= product.pictures[0].replaceAll(`"`, ``);

  return (
    <div className="card p-3 border-0 cardCss">
      <img
        src={filteredPicture}
        className="card-img-top imageProduct"
        alt="..."
      ></img>
      <div id="button-div" className="d-flex align-items-center">
        <button
          className="addToCart"
          onClick={() => {
            console.log("buttonCart", buttonCart);
            if (buttonCart !== "Agregar al carrito") {
              //  Navigate("/user/cart");
              navigate("/");
            } else {
              dispatch(addProductToCart(product._id));
              setButtonCart("Ver carrito");
            }
          }}
        >
          {buttonCart}
        </button>
      </div>
      <div className="card-body">
        <h6 class="product-title">{(product.name).toUpperCase()}</h6>
        <h4 class="product-price mt-4">{`U$S ${product.price}`}</h4>
      </div>
    </div>
  );
}
export default ProductCard;
