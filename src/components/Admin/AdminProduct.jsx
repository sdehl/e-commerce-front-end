// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/AdminStyles.css";
// import { Link, Navigate } from "react-router-dom";

// function AdminProduct() {
//   const [product, setProduct] = useState();

//   const handles = {
//     updateProduct: async (productId, product) => {
//       const response = await axios({
//         method: "patch",
//         url: `${process.env.REACT_APP_API_URL}/admin/products/${productId}`,
//         data: { product },
//       });
//     },
//   };

//   useEffect(() => {
//     async function getProduct() {
//       try {
//         const result = await axios({
//           method: "GET",
//           url: `${process.env.REACT_APP_API_URL}/product/${params.id}`,
//         });
//         await setProduct(result.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     handle.get3Products();
//     getProduct();
//   }, []);


//   return product(
//     <div>
//       <input value></input>
//       <input></input>
//       <input></input>
//       <input></input>
//     </div>
//   );
// }

// export default AdminProduct;

// // <th scope="row">{product.name}</th>
// // <td>{product.Category}</td>
// // <td>{product.price}</td>
// // <td>{product.stock}</td>
// // <td>
// //   <button
// //     className="updateButton1"
// //     onClick={() => {
// //       handle.updateProduct(product._id, product);
// //     }}
// //   >
// //     Cambiar
// //   </button>
