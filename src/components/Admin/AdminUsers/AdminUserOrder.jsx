import { useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../svg/plus-solid.svg";
import minus from "../../svg/minus-solid.svg";

function UserOrder({ products, order, index }) {
  const [moreInfoProducts, setMoreInfoProducts] = useState(false);
  const handle = {
    grabPicture: (product) => {
      return product.pictures[0].replaceAll(`"`, ``);
    },
  };
  return (
    <>
      <div className="infoOrder m-3 ">
        <div className="d-flex align-items-center m-4">
          <h5 className="titulo-Pedido">Código de pedido: </h5>
          <h6 className="mt-1 mr-3">#{order._id}</h6>
        </div>

        <div className="d-flex align-items-center m-4">
          <h5 className="titulo-Pedido">Fecha de creación: </h5>
          <h6 className="mt-1 mr-3"> {order.createdAt}</h6>
        </div>
        <div className="d-flex align-items-center m-4">
          <h5 className="titulo-Pedido">Precio total: </h5>
          <h6 className="mt-1 mr-3"> U$S {order.totalPrice}</h6>
        </div>
        <div className="d-flex align-items-center m-4">
          <h5 className="titulo-Pedido">Cantidad de productos: </h5>
          <h6 className="mt-1 mr-3"> {order.products.length}</h6>
        </div>
        {!moreInfoProducts ? (
          <div className="d-flex justify-content-end">
            {" "}
            <button
              className="buttonCrud p-2"
              onClick={() => {
                setMoreInfoProducts(true);
              }}
            >
              <img className="plus-icon" src={plus} alt="plus icon" />
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-end">
            {" "}
            <button
              className="buttonCrud p-2"
              onClick={() => {
                setMoreInfoProducts(false);
              }}
            >
              <img className="minus-icon" src={minus} alt="minus icon" />
            </button>
          </div>
        )}
        {moreInfoProducts &&
          products.map((product) => {
            return (
              <div className="d-flex justify-content-around align-items-center m-4">
                <h6 className="m-2">{product.cant}</h6>
                <h6 className="m-2">U$S {product.product.price}</h6>
                <Link to={`/admin/products/${product.product.slug}`}>
                  <button className="irAtras"> {product.product.name}</button>
                </Link>
                <img className="imageOrder" src={handle.grabPicture(product.product)}></img>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default UserOrder;
