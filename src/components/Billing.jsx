import {
  deleteCart
} from "../redux/slices/gemaSlice";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./styles/BillingStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

function Billing({ userLogged }) {
  const gema = useSelector((state) => state.gema);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cart, setCart] = useState(null);
  const token = useSelector((state) => state.gema.userData.token);
  const [errorMessage, setErrorMessage] = useState(false);
  const [order, setOrder] = useState({});
  const [productoFalta, setProfuctoFalta] = useState(null);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0.1,
        margin: 0,
      }}
    />
  );

  const handle = {
    apiCall: async (productSlug) => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/product/${productSlug}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    updateCart: async () => {
      const obj = [];
      let tot = 0;
      for (const prod of gema.cart) {
        if (prod.cant > 0) {
          let productObject = await handle.apiCall(prod.slug);
          console.log(productObject);
          obj.push({ product: productObject, cant: prod.cant });
          tot += productObject.price * prod.cant;
        }
      }
      await setCart(obj);
    },
    createOrder: async () => {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/orders`,
        data: { order },
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data !== 200) {
        setProfuctoFalta(response.data);
      } else {
        return response.data;
      }
    },
  };

  useEffect(() => {
    console.log("productoFalta", productoFalta)
    handle.updateCart();
    setOrder((current) => {
      return {
        ...current,
        products: cart,
      };
    });
  }, []);

  useEffect(() => {
    setOrder((current) => {
      return {
        ...current,
        products: cart,
      };
    });
  }, [cart]);

  return (
    cart && (
      <div className="contMargin">
        <div className="row">
          <div className="col-6">
            <div className="d-flex listProducts">
              <div className="d-flex flex-column ml-4">
                {" "}
                {
                  //we will by default put the name of the user logged
                }
                <label>First Name *</label>
                <input
                  required
                  className="inputListCheckout"
                  value={order.name}
                  onChange={(e) => {
                    setOrder((current) => {
                      return {
                        ...current,
                        name: e.target.value,
                      };
                    });
                  }}
                ></input>
              </div>
              <div className="d-flex flex-column">
                {" "}
                <label>Last Name *</label>
                <input required className="inputListCheckout"></input>
              </div>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Nombre de la empresa (opcional)</label>
              <input
                className="inputListCheckout"
                value={order.companyName}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      companyName: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Dirección de la calle *</label>
              <input
                required
                className="inputListCheckout"
                placeholder="NUMERO DE LA CASA Y NOMBRE DE LA CALLE"
                value={order.adress}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      adress: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label> Localidad / Ciudad *</label>
              <input
                className="inputListCheckout"
                value={order.city}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      city: e.target.value,
                    };
                  });
                }}
                required
              ></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Código postal *</label>
              <input
                className="inputListCheckout"
                value={order.postalCode}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      postalCode: e.target.value,
                    };
                  });
                }}
                required
              ></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Teléfono *</label>
              <input
                className="inputListCheckout"
                value={order.telephone}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      telephone: e.target.value,
                    };
                  });
                }}
                required
              ></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Correo electrónico *</label>
              <input
                className="inputListCheckout"
                value={order.mail}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      mail: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div className=" d-flex flex-column listProducts">
              <label>Notas del pedido (opcional)</label>
              <input
                className="extraInfoInput"
                value={order.additionalDescription}
                onChange={(e) => {
                  setOrder((current) => {
                    return {
                      ...current,
                      additionalDescription: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
          </div>
          <h3 className="mt-4 mb-3">TU PEDIDO</h3>
          <div className="">
            <div className="d-flex">
              {" "}
              <h5>PRODUCTO</h5>
              <h5>SUBTOTAL</h5>
            </div>
            {cart.map((property) => {
              return (
                <div>
                  <ColoredLine color="gray" />
                  <div className="d-flex listProducts">
                    <h5>{property.product.name}</h5>
                    <h5>{property.product.price}</h5>
                  </div>
                </div>
              );
            })}
            <div>
              <h3>TOTAL PRICE</h3>
              <h3>{gema.totalPrice}</h3>
            </div>
          </div>
          <button
            className="createOrder m-4"
            onClick={async () => {
              const response = await handle.createOrder();
              console.log(response);
              if (response !== 200) {
                setErrorMessage(true)
              } else {
                Swal.fire({
                  title: 'La orden fue creada correctamente!',
                  icon: 'success',
                  confirmButtonText: 'Continuar'
                })
                dispatch(deleteCart());
                navigate("/products")
              }
            }}
          >
            Mandar pedido
          </button>
          {errorMessage && (
            <>
              <p className="m-2 fst-italic">Error en crear orden repase su información. Puede que ya no haya stock de los productos elegidos</p>
              <div>
                {productoFalta
                  && productoFalta.map((product) => {
                    return (
                      <div className="d-flex flex-column mt-4">
                        <h4 className="m-2 fw-bold">INFORMACION DE PRODUCTOS EN FALTA DE STOCK</h4>
                        <h6 className="m-2">NOMBRE: {product.name}</h6>
                        <h6 className="m-2">Cantidad stock restante: {product.stockLeft}</h6>
                        <img src={product.picture}>
                        </img>
                      </div>
                    );
                  })}

              </div>
            </>
          )
          }
        </div>
      </div>
    )
  );
}

export default Billing;
