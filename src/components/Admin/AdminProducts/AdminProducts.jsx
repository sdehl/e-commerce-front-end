import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import ReactLoading from "react-loading";
import trash from "../../svg/trash-solid.svg";
import edit from "../../svg/pen-to-square-regular.svg";
import backArrow from "../../svg/arrow-left-solid.svg";
import check from "../../svg/check-solid.svg";
import cancel from "../../svg/xmark-solid.svg";

import "../../styles/AdminStyles.css";

function AdminProducts({ categoryName }) {
  const token = useSelector((state) => state.gema.userData.token);
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);
  const [categoryEmptyMessage, setCategoryEmptyMessage] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const handle = {
    apiCall: async () => {
      try {
        if (categoryName) {
          const response = await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/categories/products/${categoryName}`,
            headers: { Authorization: `Bearer ${token}` },
          });
          setNewCategoryName(categoryName);
          setProducts(response.data.products);
        } else {
          const response = await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/products`,
            headers: { Authorization: `Bearer ${token}` },
          });
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct: async (slug) => {
      try {
        axios({
          method: "delete",
          url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        const newProducts = products.filter((e) => {
          return e.slug !== slug;
        });
        setProducts(newProducts);
      } catch (error) {
        console.log(error);
      }
    },
    updateCategoryName: async () => {
      try {
        axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/categories/${categoryName}`,
          data: { newCategoryName },
          headers: { Authorization: `Bearer ${token}` },
        });
        const newProducts = products.map((product) => {
          return { ...product, category: newCategoryName };
        });
        setProducts(newProducts);
      } catch (error) {
        console.log(error);
      }
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  useEffect(() => {
    if (newCategoryName.length > 0) {
      setCategoryEmptyMessage(false);
    }
  }, [newCategoryName]);

  return products ? (
    <>
      <h1 className="m-4 d-flex justify-content-center">PRODUCTOS</h1>
      {categoryName && (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center align-items-center">
            <input
              className="inputCategoryName mt-2"
              value={newCategoryName}
              placeholder={newCategoryName}
              onChange={(e) => {
                setNewCategoryName(e.target.value);
              }}
            ></input>
            <button
              className="edit-button m-1"
              onClick={() => {
                if (newCategoryName.length !== 0) {
                  handle.updateCategoryName();
                  navigate(`/admin/categories/${newCategoryName}`);
                  window.location.reload();
                } else {
                  setCategoryEmptyMessage(true);
                }
              }}
            >
              <img className="edit-icon" src={edit} alt="edit-icon" />
            </button>
          </div>
          {categoryEmptyMessage && (
            <div className="errorMessagCategory m-3 d-flex">
              <Alert className="px-2" severity="warning">
                Casillero vacío! Se le debe asignar nombre a la categoría.
              </Alert>
            </div>
          )}
        </div>
      )}
      <div className="container mt-4">
        <div className="mb-3 d-flex justify-content-between ">
          {categoryName ? (
            <Link className="link-admin-center" to={`/admin/categories`}>
              <button className=" d-flex align-items-center irAtras px-0">
                {" "}
                <img className="arrow-icon " src={backArrow} alt="back arrow icon" />{" "}
                <span className="mx-2">CATEGORÍAS</span>
              </button>
            </Link>
          ) : (
            <Link className="link-admin-center" to={`/admin`}>
              <button className=" d-flex align-items-center irAtras px-0">
                {" "}
                <img className="arrow-icon " src={backArrow} alt="back arrow icon" />{" "}
                <span className="mx-2">CENTRO ADMINISTRATIVO </span>
              </button>
            </Link>
          )}
          <Link to={`/admin/products/create`}>
            <button className="buttonCrud px-0"> CREAR PRODUCTO</button>
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr className="titlesTable">
              <th className="fw-bold" scope="col">
                Nombre
              </th>
              <th className="fw-bold d-flex justify-content-center" scope="col">
                Categoría
              </th>
              <th className="fw-bold textCenter" scope="col">
                Precio
              </th>
              <th className="fw-bold textCenter" scope="col">
                Stock
              </th>
              <th className="fw-bold " scope="col">
                Actualizar
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <IndividualProduct key={product._id} product={product} handle={handle} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"50%"}
        width={"50%"}
      />
    </div>
  );
}

function IndividualProduct({ product, handle }) {
  const [verifyDeleted, setVerifyDeleted] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);

  useEffect(() => {
    setVerifyDeleted(false);
  }, [deleteProduct]);
  return (
    <>
      <tr>
        <td scope="row">{product.name}</td>
        <td className="textTable">{product.category}</td>
        <td className="textTable">{product.price}</td>
        <td className="textTable">{product.stock}</td>
        <td>
          {!verifyDeleted && (
            <>
              <Link to={`/admin/products/${product.slug}`}>
                <button className="edit-button m-1">
                  <img className="edit-icon" src={edit} alt="edit-icon" />
                </button>
              </Link>
              <button
                className="trash-button m-1"
                onClick={() => {
                  setVerifyDeleted(true);
                }}
              >
                <img className="delete-icon" src={trash} alt="delete icon" />
              </button>
            </>
          )}

          {verifyDeleted && (
            <div className="d-flex justify-content-between confirmationContainer">
              <Alert className="px-2" severity="warning">
                Está seguro?
              </Alert>
              <button
                className=" check-button"
                onClick={() => {
                  handle.deleteProduct(product.slug);
                  setDeleteProduct(true);
                  setVerifyDeleted(false);
                }}
              >
                <img className="check-icon" src={check} alt="check icon" />
              </button>
              <button
                className=" cancel-button"
                onClick={() => {
                  setDeleteProduct(false);
                  setVerifyDeleted(false);
                }}
              >
                <img className="cancel-icon" src={cancel} alt="x icon" />
              </button>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

export default AdminProducts;
