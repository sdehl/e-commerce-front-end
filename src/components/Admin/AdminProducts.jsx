import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../styles/AdminStyles.css";

function AdminProducts() {
  const [products, setProducts] = useState(null);

  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
      });
      setProducts(response.data);
    },
    deleteProduct: async (id) => {
      const response = axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/products/${id}`,
      });
      const newProducts = products.filter((e) => {
        return e._id !== id;
      });
      console.log("new Products", newProducts);
      setProducts(newProducts);
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return (
    products && (
      <div className="container mt-4">
        <table class="table table-hover">
          <thead>
            <tr>
              <th className="fw-bold" scope="col">
                Name
              </th>
              <th className="fw-bold" scope="col">
                Category
              </th>
              <th className="fw-bold" scope="col">
                Price
              </th>
              <th className="fw-bold" scope="col">
                Stock
              </th>
              <th className="fw-bold" scope="col">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <th scope="row">{product.name}</th>
                  <td>{product.Category}</td>
                  <td className="textTable">{product.price}</td>
                  <td className="textTable">{product.stock}</td>
                  <td className="d-flex justify-content-between">
                    <button
                      className="updateButtonProduct"
                      onClick={() => {
                        //Navigate(`adminProduct/${product._id}`);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="updateButtonProduct"
                      onClick={() => {
                        handle.deleteProduct(product._id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
}

export default AdminProducts;
