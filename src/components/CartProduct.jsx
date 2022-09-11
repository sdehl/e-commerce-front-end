import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../components/styles/CartStyles.css";
import { Link } from "react-router-dom";

function CartProduct({ product, cant }) {
  const [quantity, setQuantity] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const filteredPicture = product.pictures[0].replaceAll(`"`, ``);

  useEffect(() => {
    setQuantity(cant);
    setSubTotal(cant * product.price);
  }, []);

  useEffect(() => {
    setSubTotal(quantity * product.price);
  }, [quantity]);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-center">
        <span className="m-3 delete" onClick={() => {}}>
          {" "}
          X{" "}
        </span>
        <div className="imageDivCart m-3">
          {" "}
          <img src={filteredPicture} className="imageCart" alt="..."></img>
        </div>
        <Link className="product-link" to={`/product/${product.slug}`}>
          <p className="m-3">{product.name}</p>
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {" "}
        <p className="elemntsPrice">{`U$S ${product.price}`}</p>
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
        <p className="elemntsPrice">{subTotal}</p>
      </div>
    </div>
  );
}

export default CartProduct;
