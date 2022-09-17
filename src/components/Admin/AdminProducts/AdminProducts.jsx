import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import trash from "../../svg/trash-solid.svg";
import edit from "../../svg/pen-to-square-regular.svg";
import backArrow from "../../svg/arrow-left-solid.svg";
import Alert from "@mui/material/Alert";
import check from "../../svg/check-solid.svg";
import cancel from "../../svg/xmark-solid.svg";
import "../../styles/AdminStyles.css";

function AdminProducts({ allProducts }) {
  const token = useSelector((state) => state.gema.userData.token);
  const [products, setProducts] = useState(null);

  const handle = {
    apiCall: async () => {
      if (allProducts) {
        setProducts(allProducts.products);
      } else {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/products`,
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      }
    },
    deleteProduct: async (slug) => {
      const response = axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      const newProducts = products.filter((e) => {
        return e.slug !== slug;
      });
      setProducts(newProducts);
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return (
    products && (
      <>
        <h1 className="m-4 d-flex justify-content-center">PRODUCTOS</h1>
        <div className="container mt-4">
          <div className="mb-3 d-flex justify-content-between ">
            <Link className="link-admin-center" to={`/admin`}>
              <button className=" d-flex align-items-center irAtras px-0">
                {" "}
                <img className="arrow-icon " src={backArrow} alt="back arrow icon" />{" "}
                <span className="mx-2">CENTRO ADMINISTRATIVO </span>
              </button>
            </Link>
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
                <th className="fw-bold" scope="col">
                  Precio
                </th>
                <th className="fw-bold" scope="col">
                  Stock
                </th>
                <th className="fw-bold " scope="col">
                  Actualizar
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return <IndividualProduct product={product} handle={handle} />;
              })}
            </tbody>
          </table>
        </div>
      </>
    )
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
