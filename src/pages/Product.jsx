import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles/ProductStyles.css";

function Product() {
  const [products, setProducts] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await axios({
          method: "GET",
          url: `http://localhost:8000/products`,
          //   url: `http://localhost:8000/products/${params._id}`,
        });
        // console.log(result.data);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  console.log(products);
  return (
    products && (
      <div className="container oneProductSection">
        <div className="row ">
          <div className="col-4">
            <img
              className="productImg"
              src="https://www.gemainteriores.com/wp-content/uploads/2020/11/H03-GRA-38-BZ.jpg"
              alt=""
            />
          </div>
          <div className="col-8">
            <h1>PERCHA GRANATE BRONCE</h1>
            <h3>U$S 9</h3>
            <h6>Categorías: BRONCE - HERRAJES - PERCHAS</h6>

            <button className="quantityBtn">- 3 +</button>
            <button className="addToCartBtn">AGREGAR AL CARRITO</button>
          </div>
          <div className="row description ">
            <strong>
              <div>DESCRIPCIÓN</div>
            </strong>
            <hr />
            <div>
              <p className="dimentions">
                <strong>DIMENSIONES: </strong>
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
              <p className="includes">INCLUYE TORNILLOS CORRESPONDIENTES</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
