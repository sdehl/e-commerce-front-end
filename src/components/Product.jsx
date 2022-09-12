import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  updateCantProducts,
  updateTotalPrice,
} from "../redux/slices/gemaSlice";
import ProductCard from "./ProductCard";
import "./styles/ProductStyles.css";

function Product() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const [recomProducts, setRecomProducts] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handle = {
    get3Products: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products/random`,
        params: { idToAvoid: params.id },
      });
      return await setRecomProducts(response.data);
    },
  };

  useEffect(() => {
    async function getProduct() {
      console.log("params.id", params)
      try {
        const result = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/product/${params.slug}`,
        });
        await setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    handle.get3Products();
    getProduct();
  }, [params]);

  return (
    product &&
    recomProducts && (
      <div className="container oneProductSection">
        <div className="row ">
          <div className="col-12 col-lg-4 ">
            <img className="productImg" src={product.pictures[1]} alt="" />
          </div>
          <div className="productInformation col-12 col-lg-8">
            <h1>{product.name.toUpperCase()}</h1>
            <h3>U$S {product.price}</h3>
            <h6>Categorías: {product.Category.toUpperCase()}</h6>{" "}
            <p className="productStock">
              {" "}
              {product.stock > 0 ? "HAY STOCK" : "PRODUCTO NO DISPONIBLE"}
            </p>
            <div className="buttons">
              <div className="quantityBtn">
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
              </button>
            </div>
          </div>
          <div className="row description ">
            <strong>
              <div>DESCRIPCIÓN</div>
            </strong>
            <hr />
            <div>
              <p className="dimentions">
                <strong>DIMENSIONES: </strong>
                <br />
                Diámetro: 12 mm Ancho: 38 mm
              </p>
              <p className="materials">
                {" "}
                <strong>MATERIALES: </strong>
                <br />
                Bronce Macizo con terminación barniz transparente mate
              </p>
              <p>
                <strong>
                  <Link className="careTips" to="#">
                    – Ver Mantenimiento y Cuidados por más información –{" "}
                  </Link>
                </strong>
              </p>
              <p className="includes">
                INCLUYE COMPONENTES CORRESPONDIENTES PARA SU COLOCACIÓN
              </p>
            </div>
          </div>
        </div>

        <div className="recommendations">
          <h4>TAMBIÉN TE RECOMENDAMOS...</h4>
          <div className="row">
            {recomProducts.map((prod) => {
              return <ProductCard key={prod._id} product={prod} />;
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
