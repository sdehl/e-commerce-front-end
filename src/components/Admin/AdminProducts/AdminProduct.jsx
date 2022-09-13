import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminStyles.css"
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router";

function AdminProduct() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [correctlyUpdated, setCorrectlyUpdated] = useState(false);
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
    updateProduct: async (slug, product) => {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
        data: { product },
      });
    },
    createProduct: async (slug, product) => {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
        data: { product },
      });
    },
  };

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/product/${params.id}`,
        });
        await setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
    
  }, []);

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
              onClick={() => {
                handle.updateProduct(product.slug, product);
                setCorrectlyUpdated(true);
              }}
            >
              ACTUALIZAR
            </button>
            {correctlyUpdated && (
              <p className="alertCorrectActualization">Se ha actualizado correctamente</p>
            )}
          </div>
          <Link style={{ textDecoration: "none" }} to="/adminProducts">
            <p className="LinkGoBack">ATRAS</p>
          </Link>
        </div>
      </div>
    )
  );
}

export default AdminProduct;
