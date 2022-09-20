import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../svg/plus-solid.svg";
import less from "../../svg/minus-solid.svg";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import check from "../../svg/check-solid.svg";
import axios from "axios";

function UserOrder({ products, order }) {
  const token = useSelector((state) => state.gema.userData.token);
  const [moreInfoProducts, setMoreInfoProducts] = useState(false);
  const [updateState, setUpdateState] = useState(false);
  const [stateOrder, setStateOrder] = useState(order.state);

  const handle = {
    grabPicture: (product) => {
      return product.pictures[0].replaceAll(`"`, ``);
    },
    updateOrderStatus: async () => {
      try {
        await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/orders/${order._id}`,
          data: { stateOrder },
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.log(error);
      }
    },
    getNewStatus: async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/orders/${order._id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        setStateOrder(response.data.state);
      } catch (error) {
        console.log(error);
      }
    },
  };

  useEffect(() => {
    handle.getNewStatus();
  }, []);

  useEffect(() => {
    setUpdateState(false);
  }, [stateOrder]);

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
          <h5 className="titulo-Pedido">Estado del pedido </h5>
          <input
            type="text"
            className="statusInput"
            value={stateOrder}
            onChange={(e) => {
              setStateOrder(e.target.value);
            }}
          />
          <button
            className="buttonStatusOrder"
            onClick={() => {
              handle.updateOrderStatus();
              setUpdateState(true);
            }}
          >
            <img className="check-icon" src={check} alt="check icon" />
          </button>
          {updateState && (
            <Alert severity="success">Se ha actualizado el estado correctamente</Alert>
          )}
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
              <img className="minus-icon" src={less} alt="minus icon" />
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
