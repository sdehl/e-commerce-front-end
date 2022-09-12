import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminStyles.css";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router";

function AdminProduct() {
  const params = useParams();
  const [product, setProduct] = useState();

  const handle = {
    updateProduct: async (productId, product) => {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/products/${productId}`,
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
      <div>
        <div className="d-flex flex-column">
          <p></p>
          <input
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
          <input
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
          <input
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
          <input
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
          <input
            value={product.description}
            onChange={(e) => {
              setProduct((current) => {
                return {
                  ...current,
                  description: e.target.value,
                };
              });
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            handle.updateProduct(product._id, product);
            Navigate(-1);
          }}
        >
          ACTUALIZAR
        </button>
      </div>
    )
  );
}

export default AdminProduct;

// <th scope="row">{product.name}</th>
// <td>{product.Category}</td>
// <td>{product.price}</td>
// <td>{product.stock}</td>
// <td>
//   <button
//     className="updateButton1"
//     onClick={() => {
//       handle.updateProduct(product._id, product);
//     }}
//   >
//     Cambiar
//   </button>
