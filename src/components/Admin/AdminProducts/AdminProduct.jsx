import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminStyles.css"
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Alert from '@mui/material/Alert';

function AdminProduct() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [correctlyUpdated, setCorrectlyUpdated] = useState(false);
  const [validCategory, setValidCategory] = useState(true);
  const token = useSelector((state) => state.gema.userData.token);
  const [originalName, setOriginalName] = useState();

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
    updateProduct: async (product) => {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/products/${product.slug}`,
        data: { product, originalName },
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data)
      return await response.data;
    },
  };

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/product/${params.slug}`,
          headers: { Authorization: `Bearer ${token}` },

        });
        await setProduct(response.data);
        setOriginalName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();

  }, []);

  useEffect(() => {
    setCorrectlyUpdated(false);
    setValidCategory(true);
  }, [product]);

  return (
    product && (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 d-flex flex-column">
            <input
              className="nameIndividualProduct"
              value={product.name}
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
                  value={product.price}
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
                  value={product.stock}
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
                value={product.category}
                onChange={(e) => {
                  setProduct((current) => {
                    return {
                      ...current,
                      category: e.target.value,
                    };
                  });
                }}
              ></input>
              {!validCategory &&
                <>
                  <Alert severity="error">ERROR! No existe categoría! Las categorias actuales son:</Alert>
                  <ul>
                    <li>Herrajes</li>
                    <li>Tiradores</li>
                    <li>Grifería</li>
                  </ul>
                </>}
            </div>
            <ColoredLine color="gray" />
            <textarea
              className="mt-5 mb-4 texAreaProduct"
              value={product.description}
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
            {product.pictures.map((picture, index) => {
              return (
                <div className="d-flex flex-column align-items-center">
                  <div className="imagesOfProduct d-flex align-items-center m-3">
                    {index === 0 ? (
                      <img
                        className="productImg"
                        src={picture.replaceAll(`"`, ``)}
                        alt="Many product images"
                      />
                    ) : (
                      <img className="productImg" src={picture} alt="Many product images" />
                    )}
                  </div>
                  <div>
                    <button className="buttonUpdate">Eliminar</button>
                    <button className="buttonUpdate">Modificar</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex align-items-center itemsUpdate">
            <button
              className="update"
              onClick={async () => {
                const status = await handle.updateProduct(product);
                console.log("status", status);
                if (status === 200) {
                  setCorrectlyUpdated('Correctly added');
                } else if (status === 408) {
                  setOriginalName(product.name);
                  setValidCategory(false);
                } else {
                  setOriginalName(product.name);
                  setCorrectlyUpdated('Not correctly added');
                }
              }}
            >
              ACTUALIZAR
            </button>
            {correctlyUpdated === 'Correctly added' && <Alert severity="success">Se ha actualizado correctamente</Alert>}
            {correctlyUpdated === 'Not correctly added' && <Alert severity="error">ERROR! Verifique que el nombre del producto sea único</Alert>}

          </div>
          <Link style={{ textDecoration: "none" }} to="/admin/products">
            <p className="LinkGoBack">ATRAS</p>
          </Link>
        </div>
      </div>
    )
  );
}

export default AdminProduct;
