import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import backArrow from "../../svg/arrow-left-solid.svg";
import "../../styles/AdminStyles.css";

function NewProduct() {
  const token = useSelector((state) => state.gema.userData.token);
  const [product, setProduct] = useState(null);
  const [correctlyCreated, setCorrectlyCreated] = useState("");
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

  //Auxiliar function
  const handle = {
    createProduct: async () => {
      try {
        const response = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/products`,
          data: { product },
          headers: { Authorization: `Bearer ${token}` },
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
  };

  useEffect(() => {
    if (setCorrectlyCreated === "Not correctly added") {
      setCorrectlyCreated("Not correctly added");
    }
  }, [product]);

  return (
    <div className="container mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handle.createProduct();
        }}
      >
        <div className="row">
          <div className="col-6 d-flex flex-column">
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
                <lable className="m-2">PRECIO (U$S)</lable>
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
                <lable className="m-2 ">STOCK</lable>
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
              <lable className="m-4">CATEGORÍAS</lable>
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
                <option value="Herrajes">Herrajes</option>
                <option value="Tiradores">Tiradores</option>
                <option value="Grifería">Grifería</option>
              </select>
            </div>
            <ColoredLine color="gray" />
            <textarea
              type="text"
              name="description"
              id="description"
              className="nameIndividualProduct"
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
            {(correctlyCreated === "" || correctlyCreated === "Not correctly added") && (
              <button className="update" type="submit">
                CREAR
              </button>
            )}

            {correctlyCreated === "Correctly added" && (
              <div className="p-4">
                {" "}
                <Alert severity="success">Se ha creado correctamente</Alert>
              </div>
            )}
            {correctlyCreated === "Not correctly added" && (
              <Alert severity="error">ERROR! Verifique que el nombre del producto sea único</Alert>
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
  );
}

export default NewProduct;
