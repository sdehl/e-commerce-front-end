import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import backArrow from "../../svg/arrow-left-solid.svg";

import "../../styles/AdminStyles.css";

function AdminProduct() {
  const token = useSelector((state) => state.gema.userData.token);
  const params = useParams();

  //states
  const [product, setProduct] = useState(null);
  const [correctlyUpdated, setCorrectlyUpdated] = useState(false);
  const [originalName, setOriginalName] = useState("");
  const [originalCategory, setOriginalCategory] = useState("");
  const [allCategories, setAllCategories] = useState("");

  const navigate = useNavigate();

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
    updateProduct: async () => {
      try {
        const response = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/products/${product.slug}`,
          data: { product, originalName, originalCategory },
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data === 409) {
          setCorrectlyUpdated("Not correctly added");
        } else if (response.status === 200) {
          setCorrectlyUpdated("Correctly added");
          setOriginalName(product.name);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getCategories: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllCategories(response.data);
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
        if (response.data !== "El producto no existe! Ha sido eliminado") {
          setProduct(response.data);
          setOriginalName(response.data.name);
          setOriginalCategory(response.data.category);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  useEffect(() => {
    setCorrectlyUpdated(false);
    handle.getCategories();
  }, [product]);

  return allCategories && product ? (
    <div className="container mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handle.updateProduct();
        }}
      >
        <div className="row">
          <div className="col-6 d-flex flex-column">
            <lable htmlFor="name" className="m-2">
              NOMBRE
            </lable>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="nameIndividualProduct "
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
                <lable htmlFor="price" className="m-2">
                  PRECIO (U$S)
                </lable>
                <input
                  required
                  id="price"
                  type="number"
                  name="price"
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
                  required
                  type="number"
                  name="stock"
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
              <select
                className="dropDownCategories p-1 mb-3"
                name="categories"
                id="categories"
                defaultValue={product.category}
                required
                onChange={(e) => {
                  setProduct((current) => {
                    return {
                      ...current,
                      category: e.target.value,
                    };
                  });
                }}
              >
                <option value={product.category} selected disabled hidden>
                  {product.category}
                </option>
                <option value={allCategories[0].name}>{allCategories[0].name}</option>
                <option value={allCategories[1].name}>{allCategories[1].name}</option>
                <option value={allCategories[2].name}>{allCategories[2].name}</option>
              </select>
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
                <div key={index} className="d-flex flex-column align-items-center">
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
                    <button className="buttonUpdate my-2">Eliminar</button>
                  </div>
                  <div>
                    <label
                      htmlFor="productNewImg"
                      type="button"
                      className="buttonUpdate fakeInputLabel"
                    >
                      Modificar
                      <input
                        className="d-none"
                        type="file"
                        name="productNewImg"
                        id="productNewImg"
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex align-items-center itemsUpdate">
            {!correctlyUpdated && (
              <button className="update mt-3" type="submit">
                ACTUALIZAR
              </button>
            )}
            {correctlyUpdated === "Correctly added" && (
              <div className="m-3">
                {" "}
                <Alert severity="success">Se ha actualizado correctamente</Alert>
              </div>
            )}
            {correctlyUpdated === "Not correctly added" && (
              <div className="m-3">
                {" "}
                <Alert severity="error">
                  ERROR! Verifique que el nombre del producto sea único
                </Alert>
              </div>
            )}
          </div>
        </div>
        <button
          className="d-flex align-items-center back-button buttonGoBack mt-4"
          onClick={() => {
            navigate(`/admin/categories/${originalCategory}`);
          }}
        >
          <img className="arrow-icon mx-2" src={backArrow} alt="back arrow icon" /> ATRAS
        </button>
      </form>
    </div>
  ) : (
    <div className="m-5 d-flex flex-column justify-content-center align-items-center flex-around">
      <h3 className="mb-5">El producto ha sido eliminado</h3>
      <Link to="/admin/products/create">
        {" "}
        <button className="update">Create new product </button>
      </Link>
    </div>
  );
}

export default AdminProduct;
