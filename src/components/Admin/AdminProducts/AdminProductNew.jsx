import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import backArrow from "../../svg/arrow-left-solid.svg";
import ReactLoading from "react-loading";

import "../../styles/AdminStyles.css";

function NewProduct() {
  const token = useSelector((state) => state.gema.userData.token);
  const [product, setProduct] = useState(null);
  const [correctlyCreated, setCorrectlyCreated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [allCategories, setAllCategories] = useState("");

  console.log(product);
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

  //Auxiliar function
  const handle = {
    createProduct: async () => {
      try {
        const response = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/products`,
          data: product,
          headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
        });
        if (response.data === 409) {
          setCorrectlyCreated("Not correctly added");
        } else if (response.status === 200) {
          setCorrectlyCreated("Correctly added");
        }
      } catch (error) {
        console.log(error.message);
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
    handle.getCategories();
  }, []);

  useEffect(() => {
    if (setCorrectlyCreated === "Not correctly added") {
      setCorrectlyCreated("Not correctly added");
    }
    setIsLoading(false);
  }, [product]);

  return (
    allCategories && (
      <div className="container mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handle.createProduct();
            if (!correctlyCreated) {
              setIsLoading(true);
            }
          }}
        >
          <div className="row">
            <div className="col-6 d-flex flex-column">
              <label className="m-2">NOMBRE</label>
              <input
                required
                type="text"
                name="firstname"
                id="firstname"
                className="nameIndividualProduct"
                defaultValue={product ? product.name : ""}
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
                  <label className="m-2">PRECIO (U$S)</label>
                  <input
                    required
                    type="number"
                    name="price"
                    id="price"
                    className=" elementsInProductIndividual"
                    defaultValue={product ? product.price : ""}
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
                  <label className="m-2 ">STOCK</label>
                  <input
                    required
                    type="number"
                    name="stock"
                    id="stiock"
                    className="elementsInProductIndividual"
                    defaultValue={product ? product.stock : ""}
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
                <label className="m-4">CATEGORÍAS</label>
                <select
                  className="dropDownCategories p-1 mb-3"
                  name="categories"
                  id="categories"
                  value={product ? product.category : ""}
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
                  <option value=""></option>
                  <option value={allCategories[0].name}>{allCategories[0].name}</option>
                  <option value={allCategories[1].name}>{allCategories[1].name}</option>
                  <option value={allCategories[2].name}>{allCategories[2].name}</option>
                </select>
              </div>
              <ColoredLine color="gray" />
              <textarea
                type="text"
                name="description"
                placeholder="Descripción del producto"
                id="description"
                className="texAreaProduct"
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
                  <div className="mb-3">
                    <label htmlFor="formFile" name="picture" className="form-label">
                      Default file input example
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="picture"
                      onChange={(e) => {
                        setProduct((current) => {
                          return {
                            ...current,
                            picture: e.target.files[0],
                          };
                        });
                      }}
                    />
                  </div>

                  {/* <button className="buttonUpdate m-0">Agregar Imágen</button> */}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center itemsUpdate mt-0">
              {isLoading && !correctlyCreated ? (
                <ReactLoading className="m-2 mt-0" type={"bubbles"} color={"lightgray"} height={"12%"} width={"12%"} />
              ) : (
                (correctlyCreated === "" || correctlyCreated === "Not correctly added") && (
                  <button className="update mt-3" type="submit">
                    CREAR
                  </button>
                )
              )}

              {correctlyCreated === "Correctly added" && (
                <div className="p-4">
                  {" "}
                  <Alert severity="success">Se ha creado correctamente</Alert>
                </div>
              )}
              {correctlyCreated === "Not correctly added" && (
                <Alert severity="error" className="m-3 mt-4">
                  ERROR! Verifique que el nombre del producto sea único
                </Alert>
              )}
            </div>
            <div>
              <button
                className="d-flex align-items-center  back-button buttonGoBack my-4"
                type="submit"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <img className="arrow-icon mx-2" src={backArrow} alt="back arrow icon" /> ATRAS
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
}

export default NewProduct;
