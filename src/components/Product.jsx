import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart, updateCantProducts, updateTotalPrice } from "../redux/slices/gemaSlice";
import ProductCard from "./ProductCard";
import SingleProductModal from "./SingleProductModal";
import { Carousel } from "react-bootstrap";
import ReactLoading from "react-loading";

import "./styles/ProductStyles.css";

function Product() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [buttonCart, setButtonCart] = useState("Agregar al carrito");
  const [productForModal, setProductForModal] = useState(null);

  const [recomProducts, setRecomProducts] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setProductForModal(product);
    setShow(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handle = {
    get3Products: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products/random`,
        params: { slugToAvoid: params.slug, randomNumber: 3 },
      });
      return await setRecomProducts(response.data);
    },
  };

  useEffect(() => {
    async function getProduct() {
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

  return product && recomProducts ? (
    <div className="container oneProductSection">
      <div className="row ">
        <div className="col-12 col-lg-4 ">
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
        <div className="productInformation col-12 col-lg-8">
          <h1>{product.name.toUpperCase()}</h1>
          <h3>U$S {product.price}</h3>
          <h6>Categor??as: {product.category.toUpperCase()}</h6>{" "}
          <p className="productStock mb-5"> {product.stock > 0 ? "HAY STOCK" : "NO HAY STOCK"}</p>
          {product.stock > 0 && (
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
          )}
        </div>
        <div className="row description ">
          <strong>
            <div>DESCRIPCI??N</div>
          </strong>
          <hr />
          <div>
            <p className="dimentions">
              <strong>DIMENSIONES: </strong>
              <br />
              Di??metro: 12 mm Ancho: 38 mm
            </p>
            <p className="materials">
              {" "}
              <strong>MATERIALES: </strong>
              <br />
              Bronce Macizo con terminaci??n barniz transparente mate
            </p>
            <p>
              <Link className="careTips" to="#">
                ??? Ver Mantenimiento y Cuidados por m??s informaci??n ???{" "}
              </Link>
            </p>
            <p className="includes">INCLUYE COMPONENTES CORRESPONDIENTES PARA SU COLOCACI??N</p>
          </div>
        </div>
      </div>
      <SingleProductModal show={show} handleClose={handleClose} product={productForModal} />
      <div className="recommendations">
        <h4>TAMBI??N TE RECOMENDAMOS...</h4>
        <div className="row">
          {recomProducts.map((prod) => {
            return <ProductCard key={prod._id} product={prod} handleShow={handleShow} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"35%"}
        width={"35%"}
      />
    </div>
  );
}

export default Product;
