import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminStyles.css"
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useParams } from "react-router";

function NewProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [correctlyCreated, setCorrectlyCreated] = useState('');
  const token = useSelector((state) => state.gema.userData.token);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0.1,
        margin: 0,
      }}
    />
  );
  const handle = {
    createProduct: async (product) => {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/products`,
        data: { product },
        headers: { Authorization: `Bearer ${token}` },

      });
      return await response.data;
    },
  };

  useEffect(() => {
    setCorrectlyCreated(false);
  }, [product]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 d-flex flex-column">
          <input
            className="nameIndividualProduct"
            value={product ? product.name : ""}
            onChange={(e) => {
              setProduct((current) => {
                return {
                  ...current,
                  name: e.target.value,
                };
              });
            }}
          ></input>
          <ColoredLine color="gray" />
          <div className="d-flex justify-content-around flex-wrap  mt-5 mb-4">
            <div>
              <lable className="m-2">PRECIO (U$S)</lable>
              <input
                className=" elementsInProductIndividual"
                value={product ? product.price : ""}
                onChange={(e) => {
                  setProduct((current) => {
                    return {
                      ...current,
                      price: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
            <div>
              <lable className="m-2 ">STOCK</lable>
              <input
                className="elementsInProductIndividual"
                value={product ? product.stock : ""}
                onChange={(e) => {
                  setProduct((current) => {
                    return {
                      ...current,
                      stock: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
          </div>
          <ColoredLine color="gray" />

          <div className="mt-5 mb-4">
            <lable className="m-4">CATEGORÍAS</lable>
            <input
              className="elementsInProductIndividual "
              value={product ? product.category : ""}
              onChange={(e) => {
                setProduct((current) => {
                  return {
                    ...current,
                    category: e.target.value,
                  };
                });
              }}
            ></input>
          </div>
          <ColoredLine color="gray" />
          <textarea
            className="mt-5 mb-4 texAreaProduct"
            value={product ? product.description : ""}
            onChange={(e) => {
              setProduct((current) => {
                return {
                  ...current,
                  description: e.target.value,
                };
              });
            }}
          ></textarea>
          <ColoredLine color="gray" />
        </div>
        <div className="col-6 d-flex align-items-center flex-wrap justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <div className="imagesNewProduct d-flex align-items-center m-3"></div>
            <div>
              <button className="buttonUpdate">Agregar Imágen</button>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center itemsUpdate">
          <button
            className="update"
            onClick={async () => {
              const status = await handle.createProduct(product);
              if (status === 200) {
                setCorrectlyCreated('Correctly added');
              } else {
                setCorrectlyCreated('Not correctly added');
              }
            }}
          >
            CREAR
          </button>
          {correctlyCreated === 'Correctly added' && <p className="alertCorrectActualization m-2">Se ha actualizado correctamente</p>}
          {correctlyCreated === 'Not correctly added' && <p className="alertCorrectActualization m-2">ERROR! Verifique que el nombre del producto sea único</p>}
        </div>
        <Link style={{ textDecoration: "none" }} to="/admin/products">
          <p className="LinkGoBack">ATRAS</p>
        </Link>
      </div>
    </div>
  );
}

export default NewProduct;
