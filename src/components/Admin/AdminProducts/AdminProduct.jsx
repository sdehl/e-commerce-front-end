import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import backArrow from "../../svg/arrow-left-solid.svg";
import Images from "./AdminImageForProduct";
import check from "../../svg/check-solid.svg";
import cancel from "../../svg/xmark-solid.svg";
import ReactLoading from "react-loading";
import "../../styles/AdminStyles.css";

function AdminProduct() {
  const token = useSelector((state) => state.gema.userData.token);
  const params = useParams();
  const navigate = useNavigate();

  //states
  const [product, setProduct] = useState(null);
  const [pictures, setPictures] = useState("");
  const [newPictures, setNewPictures] = useState([]); //Pictures that are updated from the input forms
  const [correctlyUpdated, setCorrectlyUpdated] = useState(false);
  const [originalName, setOriginalName] = useState(""); //To verify if name exists
  const [originalCategory, setOriginalCategory] = useState(""); //To change the product of categorys if neccesary
  const [allCategories, setAllCategories] = useState("");
  const [amountImages, setAmountImages] = useState(0);
  const [inputList, setInputList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Function that generates a new input file
  const onAddBtnClick = (event) => {
    // console.log(inputList);
    setInputList(
      inputList.concat(
        <Images
          key={amountImages + 1}
          amountImages={amountImages}
          setInputList={setInputList}
          inputList={inputList}
          setAmountImages={setAmountImages}
        />,
      ),
    );
  };

  //Black line for design
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

  //auxiliary functions
  const handle = {
    updateProduct: async (target) => {
      const formData = new FormData(target);
      try {
        const response = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/products/${product.slug}?${
            "originalName=" + originalName
          }&${"originalCategory=" + originalCategory}&${"pictures=" + pictures}`,
          data: formData,
          // query: { originalName, originalCategory },
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data === 409) {
          setCorrectlyUpdated("Not correctly updated");
        } else if (response.status === 200) {
          setCorrectlyUpdated("Correctly updated");
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

  //Initially gets all products
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
          setPictures(response.data.pictures);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  //Changing informative messages when value changes
  useEffect(() => {
    setCorrectlyUpdated(false);
    handle.getCategories();
    if (correctlyUpdated === "Not correctly updated") {
      setCorrectlyUpdated("Not correctly updated");
      setIsLoading(false);
    }
  }, [product]);

  return product ? (
    allCategories && pictures ? (
      <div className="container mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handle.updateProduct(e.target);
            setIsLoading(true);
          }}
        >
          <div className="row">
            <div className="col-md-6 col-12 d-flex flex-column">
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
            <div className="col-md-6 col-12 d-flex align-items-center flex-wrap justify-content-center">
              {pictures.map((picture, index) => {
                return (
                  <ImageProduct
                    picture={picture}
                    index={index}
                    setPictures={setPictures}
                    pictures={pictures}
                  />
                );
              })}
              <div className="m-4">
                <h6
                  className="form-label mx-5 border p-2 addIamegToProduct"
                  onClick={() => {
                    setAmountImages(amountImages + 1);
                    onAddBtnClick();
                  }}
                >
                  AGREGAR IMAGEN
                </h6>
                {inputList}
              </div>
            </div>
            <div className="d-flex align-items-center itemsUpdate mt-0">
              {isLoading &&
              (!correctlyUpdated ||
                correctlyUpdated === "Not correctly updated" ||
                correctlyUpdated !== "Correctly updated") ? (
                <ReactLoading
                  className="m-1 mt-0"
                  type={"bubbles"}
                  color={"lightgray"}
                  height={"12%"}
                  width={"12%"}
                />
              ) : (
                (!correctlyUpdated || correctlyUpdated === "Not correctly updated") && (
                  <button className="update mt-3" type="submit">
                    ACTUALIZAR
                  </button>
                )
              )}

              {correctlyUpdated === "Correctly updated" && (
                <div className="p-4">
                  {" "}
                  <Alert severity="success">Se ha actualizado correctamente</Alert>
                </div>
              )}
              {correctlyUpdated === "Not correctly updated" && (
                <Alert severity="error" className="m-3 mt-4">
                  ERROR! Verifique que el nombre del producto sea único
                </Alert>
              )}
            </div>
          </div>
          <button
            className="d-flex align-items-center back-button buttonGoBack mt-4"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img className="arrow-icon mx-2" src={backArrow} alt="back arrow icon" /> ATRÁS
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
    )
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

export default AdminProduct;

function ImageProduct({ index, setPictures, picture, pictures }) {
  //SET WARNING BEFORE DELETING AN IMAGE
  const [verifyDeleted, setVerifyDeleted] = useState(false);

  return (
    <div key={index} className="d-flex flex-column align-items-center justify-content-center">
      <div className="imagesOfProduct d-flex align-items-center m-4">
        {index === 0 ? (
          <img className="productImg" src={picture.replaceAll(`"`, ``)} alt="product images" />
        ) : (
          <img className="productImg" src={picture} alt="product images" />
        )}
      </div>
      <div>
        <div
          className="buttonUpdate my-2 d-flex justify-content-center"
          onClick={() => {
            setVerifyDeleted(true);
          }}
        >
          Eliminar
        </div>
        {verifyDeleted && (
          <div className="d-flex justify-content-between confirmationContainer">
            <Alert className="px-2" severity="warning">
              Está seguro?
            </Alert>
            <button
              className=" check-button"
              onClick={() => {
                setPictures(
                  pictures.filter((pic) => {
                    return pic !== picture;
                  }),
                );

                setVerifyDeleted(false);
              }}
            >
              <img className="check-icon" src={check} alt="check icon" />
            </button>
            <button
              className=" cancel-button"
              onClick={() => {
                setVerifyDeleted(false);
              }}
            >
              <img className="cancel-icon" src={cancel} alt="x icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
