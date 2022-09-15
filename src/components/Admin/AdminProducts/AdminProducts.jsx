import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import trash from "../../svg/trash-solid.svg";
import edit from "../../svg/pen-to-square-regular.svg";
import backArrow from "../../svg/arrow-left-solid.svg";

import "../../styles/AdminStyles.css";

function AdminProducts() {
  const token = useSelector((state) => state.gema.userData.token);

  const [products, setProducts] = useState(null);

  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
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
                return (
                  <tr>
                    <td scope="row">{product.name}</td>
                    <td className="textTable">{product.category}</td>
                    <td className="textTable">{product.price}</td>
                    <td className="textTable">{product.stock}</td>
                    <td>
                      <Link to={`/admin/products/${product.slug}`}>
                        <button className="edit-button m-1">
                          <img className="edit-icon" src={edit} alt="edit-icon" />
                        </button>
                      </Link>

                      <button
                        className="trash-button m-1"
                        onClick={() => {
                          handle.deleteProduct(product.slug);
                        }}
                      >
                        <img className="delete-icon" src={trash} alt="delete icon" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  );
}

export default AdminProducts;
