import { useState } from "react";
import { Link } from "react-router-dom";

function UserOrder({ products, order, index }) {
  const [moreInfoProducts, setMoreInfoProducts] = useState(false);
  const handle = {
    grabPicture: (product) => {
      return product.pictures[0].replaceAll(`"`, ``);
    },
  };
  return (
    <>
      <div className="infoOrder m-3">
        <div className="d-flex align-items-center m-4 ">
          <h5 className="titulo-Pedido">Código de pedido: </h5>
          <h6 className="mt-1 mr-3 idCodigo ">#{order._id}</h6>
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
              +
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
              -
            </button>
          </div>
        )}
        {moreInfoProducts &&
          products.map((product) => {
            return (
              <div key={product.product._id} className="row m-4">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  {" "}
                  <h6>{product.cant}</h6>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                  {" "}
                  <h6>U$S {product.product.price}</h6>
                </div>
                <div className="col-5 d-flex justify-content-center align-items-center ">
                  {" "}
                  <Link to={`/admin/products/${product.product.slug}`}>
                    <button className="irAtras orderItemsName"> {product.product.name}</button>
                  </Link>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                  {" "}
                  <img
                    className="imageOrder"
                    alt="prodImage"
                    src={handle.grabPicture(product.product)}
                  ></img>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default UserOrder;
