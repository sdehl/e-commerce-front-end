import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import backArrow from "../../svg/arrow-left-solid.svg";
import ReactLoading from "react-loading";
import "../../styles/AdminStyles.css";

function Images({ amountImages }) {
  return amountImages < 8 ? (
    <input
      required
      className="form-control m-5"
      type="file"
      id={`pictures${amountImages}`}
      name="pictures"
      accept="image/png, image/jpeg"
    />
  ) : (
    <div className="m-5">
      <Alert severity="warning">
        <h6>Se pueden agregar hasta 7 imágenes</h6>
      </Alert>
    </div>
  );
}

function NewProduct() {
  const token = useSelector((state) => state.gema.userData.token);
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [amountImages, setAmountImages] = useState(0);
  const [inputList, setInputList] = useState([]);
  const [correctlyCreated, setCorrectlyCreated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [allCategories, setAllCategories] = useState("");
  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <Images setImages={setImages} images={images} amountImages={amountImages} />,
      ),
    );
  };

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
    createProduct: async (target) => {
      const formData = new FormData(target);
      try {
        const response = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/products`,
          data: formData,
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
    if (correctlyCreated === "Not correctly added") {
      setCorrectlyCreated("Not correctly added");
      setIsLoading(false);
    }
  }, [product]);

  return (
    allCategories && (
      <div className="container mt-4">
        <form
          id="newProductForm"
          onSubmit={(e) => {
            e.preventDefault();
            setIsLoading(true);
            handle.createProduct(e.target);
          }}
        >
          <div className="row">
            <div className="col-md-6 col-12 d-flex flex-column">
              <label className="m-2">NOMBRE</label>
              <input
                required
                type="text"
                name="name"
                id="name"
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
                  name="category"
                  id="category"
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
            <div className="col-md-6 col-12 d-flex mt-3 ">
              {/* <div className="d-flex flex-column align-items-center"> */}
              <div>
                <div className="mb-2">
                  <label
                    className="form-label mx-5 border p-2"
                    onClick={() => {
                      setAmountImages(amountImages + 1);
                      onAddBtnClick();
                    }}
                  >
                    AGREGAR IMAGEN
                  </label>
                  {inputList}
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="d-flex align-items-center itemsUpdate mt-0">
              {isLoading &&
              (!correctlyCreated ||
                correctlyCreated === "Not correctly added" ||
                correctlyCreated !== "Correctly added") ? (
                <ReactLoading
                  className="m-1 mt-0"
                  type={"bubbles"}
                  color={"lightgray"}
                  height={"12%"}
                  width={"12%"}
                />
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
