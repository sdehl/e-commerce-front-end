import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../Redux/slices/gemaSlice";
import ProductCard from "./ProductCard";
import "./styles/ProductStyles.css";

function Product() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        const result = await axios({
          method: "GET",
          url: `http://localhost:8000/product/${params.id}`,
        });
        console.log(result.data);
        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  return (
    product && (
      <div className="container oneProductSection">
        <div className="row ">
          <div className="col-12 col-lg-4 ">
            <img className="productImg" src={product.pictures[1]} alt="" />
          </div>
          <div className="productInformation col-12 col-lg-8">
            <h1>{product.name.toUpperCase()}</h1>
            <h3>U$S {product.price}</h3>
            <h6>Categorías: {product.Category.toUpperCase()}</h6>
            <p className="productStock">
              {" "}
              {product.stock > 0 ? "HAY STOCK" : "PRODUCTO NO DISPONIBLE"}
            </p>
            <div className="buttons">
              <button className="quantityBtn">- 3 +</button>
              <button
                className="addToCartBtn "
                onClick={() => {
                  // console.log("buttonCart", buttonCart);
                  // if (buttonCart !== "Agregar al carrito") {
                  //   // navigate("/products");
                  //   // navigate("/");
                  // } else {
                  dispatch(addProductToCart(product._id));
                  setButtonCart("Ver carrito");
                  // }
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

          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    )
  );
}

export default Product;
