import { deleteCart } from "../redux/slices/gemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./styles/BillingStyles.css";
import { set } from "lodash";

function Billing({ userLogged }) {
  const gema = useSelector((state) => state.gema);
  const token = useSelector((state) => state.gema.userData.token);
  const dispatch = useDispatch();
  console.log("gema", gema);

  //states
  const [cart, setCart] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [order, setOrder] = useState({});
  const [missingProducts, setMissingProducts] = useState(null);

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

  //Auxiliar functions
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
          obj.push({ product: productObject, cant: prod.cant });
          tot += productObject.price * prod.cant;
        }
      }
      setCart(obj);
    },
    createOrder: async () => {
      try {
        const response = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/orders`,
          data: { order, totalPrice: gema.totalPrice },
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({
          title: "La orden fue creada correctamente!",
          icon: "success",
          confirmButtonText: "Continuar",
        });
        dispatch(deleteCart());
      } catch (error) {
        setMissingProducts(error.response.data);
        setErrorMessage(true);
      }
    },
  };

  useEffect(() => {
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
        <div className="titleBilling">
          <h6 className="pb-4 tituloBilling">DETALLES DE FACTURACIÓN</h6>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6 d-flex flex-column ml-4">
                {" "}
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
              <div className="col-6 d-flex flex-column">
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
            <div className="m-0 d-flex flex-column listProducts">
              <label>Notas del pedido (opcional)</label>
              <textarea
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
              ></textarea>
            </div>
          </div>
          <h3 className="mt-4 mb-3">TU PEDIDO</h3>
          <div className="order">
            <div className="row">
              {" "}
              <h5 className="col-2"></h5>
              <h5 className="col-6 ">PRODUCTO</h5>
              <h5 className="col-2">SUBTOTAL</h5>
            </div>
            {cart.map((property) => {
              return (
                <>
                  <ColoredLine color="gray" />
                  <div className="row marginProducts">
                    <h5 className="col-2 d-flex justify-content-center">{property.cant} x</h5>
                    <h5 className="col-6">{property.product.name}</h5>
                    <h5 className="col-2">U$S {property.product.price}</h5>
                  </div>
                </>
              );
            })}
            <div className="d-flex mt-5 ">
              <h3 className="totalPrice">TOTAL PRICE</h3>
              <h4 className="mt-1">U$S {gema.totalPrice}</h4>
            </div>
          </div>
          <button
            className="createOrder m-4"
            onClick={() => {
              handle.createOrder();
            }}
          >
            MANDAR PEDIDO
          </button>
          {errorMessage && (
            <>
              <p className="m-2 fst-italic">
                Error en crear orden repase su información. Puede que ya no haya stock de los
                productos elegidos
              </p>
              <div>
                {missingProducts &&
                  missingProducts.map((product) => {
                    return (
                      <div className="d-flex flex-column mt-4">
                        <h4 className="m-2 fw-bold">INFORMACION DE PRODUCTOS EN FALTA DE STOCK</h4>
                        <h6 className="m-2">NOMBRE: {product.name}</h6>
                        <h6 className="m-2">Cantidad stock restante: {product.stockLeft}</h6>
                        <img src={product.picture}></img>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
}

export default Billing;
