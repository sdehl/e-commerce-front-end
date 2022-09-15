import { useState } from "react";
import { Link } from "react-router-dom";

function UserOrder({ products, order, index }) {
   const [moreInfoProducts, setMoreInfoProducts] = useState(false);
   const handle = {
      grabPicture: (product) => {
         return product.pictures[0].replaceAll(`"`, ``);
      }
   }
   return (
      <>
         <div className="infoOrder m-3 ">
            <p>{order.products.length}</p>
            <p >{order.createdAt}</p>
            {!moreInfoProducts ? <div className="d-flex justify-content-end"> <button className="buttonCrud" onClick={() => {
               setMoreInfoProducts(true);
            }}>Mostrar mas información</button></div> : <div className="d-flex justify-content-end"> <button className="buttonCrud" onClick={() => {
               setMoreInfoProducts(false);
            }}>Mostrar menos información</button></div>}
            {moreInfoProducts && (
               console.log("products", products),
               products.map((product) => {
                  return (
                     <div className="d-flex justify-content-around align-items-center m-4">
                        <p>{product.cant}</p>
                        <Link to={`/admin/products/${product.product.slug}`}>
                           <button className="irAtras"> {product.product.name}</button>
                        </Link>
                        <img className="imageOrder" src={handle.grabPicture(product.product)}></img>
                     </div>
                  )
               }))
            }
         </div>
      </>
   );
}

export default UserOrder;