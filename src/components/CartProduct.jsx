import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  addProductToCart,
  updateCantProducts,
  deleteProductFromCart,
  updateTotalPrice,
} from "../redux/slices/gemaSlice";
import "../components/styles/CartStyles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartProduct({ product, cant, setTotal, total }) {
  //const gema = useSelector((state) => state.gema);
  const [quantity, setQuantity] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [deletedProduct, setDeletedProduct] = useState(false);
  const filteredPicture = product.pictures[0].replaceAll(`"`, ``);
  const dispatch = useDispatch();

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
        <span
          className="m-3 delete"
          onClick={() => {
            dispatch(updateCantProducts(-quantity));
            setQuantity(0);
            dispatch(deleteProductFromCart(product._id));
            dispatch(updateTotalPrice(-(quantity * product.price)));
            setDeletedProduct(true);
          }}
        >
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
        {deletedProduct ? (
          <p className="deletedItem">Este producto fue eliminado</p>
        ) : (
          <>
            <p className="elemntsPrice">{`U$S ${product.price}`}</p>
            <div className="d-flex elemntsPrice quantityBox">
              <span
                className="add-substract pr-2"
                onClick={() => {
                  quantity >= 0 &&
                    dispatch(addProductToCart({ id: product._id, cant: -1, slug: product.slug }));
                  dispatch(updateCantProducts(-1));
                  setQuantity(quantity - 1);
                  dispatch(updateTotalPrice(-product.price));
                }}
              >
                -
              </span>
              <input
                type="text"
                min="0"
                value={quantity}
                className="input"
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    dispatch(updateCantProducts(Number(-quantity)));
                    dispatch(
                      addProductToCart({
                        id: product._id,
                        cant: -quantity,
                        slug: product.slug,
                      }),
                    );
                    dispatch(updateTotalPrice(-subTotal));
                    setQuantity(Number(e.target.value));
                    dispatch(
                      addProductToCart({
                        id: product._id,
                        cant: Number(e.target.value),
                        slug: product.slug,
                      }),
                    );
                    dispatch(updateCantProducts(Number(e.target.value)));
                    dispatch(updateTotalPrice(Number(e.target.value) * product.price));
                  }
                }}
              ></input>
              <span
                className="add-substract pr-2"
                onClick={() => {
                  dispatch(updateTotalPrice(product.price));
                  setQuantity(quantity + 1);
                  dispatch(addProductToCart({ id: product._id, cant: 1, slug: product.slug }));
                  dispatch(updateCantProducts(1));
                }}
              >
                +
              </span>
            </div>
            <p className="elemntsPrice">{subTotal}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
