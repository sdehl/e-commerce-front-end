import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteCart } from "../redux/slices/gemaSlice";
import Swal from "sweetalert2";
import Alert from "@mui/material/Alert";

import check from "../components/svg/check-solid.svg";
import backArrow from "./svg/arrow-left-solid.svg";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/BillingStyles.css";

function Billing() {
  const [value, onChange] = useState(new Date());
  const [leidoCondiciones, setLeidoCondiciones] = useState("");
  const gema = useSelector((state) => state.gema);
  const token = useSelector((state) => state.gema.userData.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //states
  const [cart, setCart] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [order, setOrder] = useState({});
  const [missingProducts, setMissingProducts] = useState(null);

  const [dolarsSelected, setDolarsSelected] = useState(false);
  const [pesosSelected, setPesosSelected] = useState(false);

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
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/product/${productSlug}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    updateCart: async () => {
      try {
        const obj = [];
        for (const prod of gema.cart) {
          if (prod.cant > 0) {
            let productObject = await handle.apiCall(prod.slug);
            obj.push({ product: productObject, cant: prod.cant });
          }
        }
        setCart(obj);
      } catch (error) {
        console.log(error);
      }
    },
    createOrder: async () => {
      try {
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/orders`,
          data: { order, totalPrice: gema.totalPrice },
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({
          title: "La orden fue creada correctamente!",
          icon: "success",
          confirmButtonText: "Continuar",
          iconColor: "#7B5A52",
          confirmButtonColor: "#7B5A52",
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
    // setOrder((current) => {
    //   return {
    //     ...current,
    //     products: cart,
    //   };
    // });
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (leidoCondiciones) {
              handle.createOrder();
            } else {
              setLeidoCondiciones(false);
            }
          }}
        >
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-6 d-flex flex-column ml-4">
                  {" "}
                  <label>
                    Nombre <span className="obligatoryBilling">*</span>{" "}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
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
                  <label>
                    Apellido <span className="obligatoryBilling">*</span>{" "}
                  </label>
                  <input required className="inputListCheckout"></input>
                </div>
              </div>
              <div className="listInfo d-flex flex-column">
                <label>Nombre de la empresa (opcional)</label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
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
                <label>
                  Dirección de la calle <span className="obligatoryBilling">*</span>{" "}
                </label>
                <input
                  required
                  type="text"
                  name="adress"
                  id="adress"
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
                <label>
                  {" "}
                  Localidad / Ciudad <span className="obligatoryBilling">*</span>{" "}
                </label>
                <input
                  required
                  type="text"
                  name="city"
                  id="city"
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
                ></input>
              </div>
              <div className="listInfo d-flex flex-column">
                <label>
                  Código postal <span className="obligatoryBilling">*</span>{" "}
                </label>
                <input
                  required
                  type="text"
                  name="postalCode"
                  id="postalCode"
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
                ></input>
              </div>
              <div className="listInfo d-flex flex-column">
                <label>
                  Teléfono <span className="obligatoryBilling">*</span>{" "}
                </label>
                <input
                  required
                  type="text"
                  name="telephone"
                  id="telephone"
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
                ></input>
              </div>
              <div className="listInfo d-flex flex-column">
                <label>
                  Correo electrónico <span className="obligatoryBilling">*</span>{" "}
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
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
              <div className="listInfo d-flex flex-column">
                <lable>
                  {" "}
                  Fecha de entrega <span className="obligatoryBilling">*</span>{" "}
                </lable>
                <div>
                  <Calendar className="calender" onChange={onChange} value={value} />
                </div>
                <p className="messageForCalender">
                  Haremos todo lo posible para entregar su pedido en la fecha especificada.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
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
            <div className="order p-5">
              <div className="row">
                <h5 className="col-2"></h5>
                <h5 className="col-6 ">PRODUCTO</h5>
                <h5 className="col-2">SUBTOTAL</h5>
              </div>
              {cart.map((property) => {
                return (
                  <div key={property.product._id}>
                    <ColoredLine color="gray" />
                    <div className="row marginProducts">
                      <h5 className="col-2 d-flex justify-content-center">{property.cant} x</h5>
                      <h5 className="col-6">{property.product.name}</h5>
                      <h5 className="col-2">U$S {property.product.price}</h5>
                    </div>
                  </div>
                );
              })}
              <ColoredLine color="gray" />
              <div className="d-flex mt-5 ">
                <h3 className="totalPrice">PRECIO TOTAL</h3>
                <h4 className="mt-1">U$S {gema.totalPrice}</h4>
              </div>

              <div className="d-flex flex-column mt-5 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <input
                    type="radio"
                    name="moneyDiposite"
                    value="moneyDiposite"
                    className="mr-3  form-check-input"
                    onClick={() => {
                      setDolarsSelected(true);
                      setPesosSelected(false);
                    }}
                  />
                  <h5 className="totalPrice mt-1 m-2">Transferencia Bancaria en Dólares</h5>
                </div>
                {dolarsSelected && (
                  <h5 className="textLighter">
                    Realiza tu pago directamente en nuestra cuenta bancaria, Itaú. Por favor,
                    utiliza el número de pedido y nombre como referencia de pago. Tu pedido no se
                    procesará hasta que se haya recibido el importe en nuestra cuenta. Luego mande
                    captura de pantalla al Whatsapp: +598 99 149 592
                  </h5>
                )}
              </div>
              <ColoredLine color="gray" />
              <div className="mt-3 mb-3">
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    name="moneyDiposite"
                    value="moneyDiposite"
                    className="mr-3  form-check-input"
                    onClick={() => {
                      setDolarsSelected(false);
                      setPesosSelected(true);
                    }}
                  />
                  <h5 className="totalPrice mt-1 m-2 ">
                    Mercado Pago en Pesos Mercado Pago en Pesos
                  </h5>
                </div>
                {pesosSelected && (
                  <div className="mt-4">
                    <h5 className="textLighter">Paga más rápido con Mercado Pago</h5>
                    <div className="d-flex">
                      {" "}
                      <img className="check-icon m-2" src={check} alt="check icon" />
                      <h5 className="m-2 textLighter">Pago seguro</h5>
                    </div>
                    <div className="d-flex">
                      {" "}
                      <img className="check-icon m-2" src={check} alt="check icon" />
                      <h5 className="m-2 textLighter">Sin cargar datos</h5>
                    </div>
                    <div className="d-flex">
                      {" "}
                      <img className="check-icon m-2" src={check} alt="check icon" />
                      <h5 className="m-2 textLighter">Cutoas disponibles</h5>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      {" "}
                      <h5 className="m-2 textLighter">Tarjetas de crédito</h5>
                      <div className="m-2 greenbackground">HASTA 1 CUOTA</div>
                    </div>
                    <div className="m-2 d-flex">
                      <div className="logosSize">
                        {" "}
                        <img
                          className="logoImageSize"
                          src="https://www.rainbowdecolombia.com/wp-content/uploads/2021/07/pago-con-tarjeta.png"
                          alt="logo icon"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div className="mt-4 mb-3 mercadoPagoDiv">
                        <img
                          className="mercadoPagoLogo"
                          src="https://tuquejasuma.com/media/images/entity576_bSwSaRU.png"
                          alt="check icon"
                        />
                      </div>
                      <h5 className="mt-3 textLighter">
                        Al confirmar tu compra, te redirigiremos a tu cuenta de Mercado Pago
                      </h5>
                      <h6 className="mt-3 textLighter">
                        Al continuar, aceptas nuestros Términos y condiciones
                      </h6>
                    </div>
                  </div>
                )}
              </div>
              <ColoredLine color="gray" />
              <div className="d-flex align-items-center mt-3">
                <input
                className="form-check-input"
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked) {
                      setLeidoCondiciones(true);
                    }
                  }}
                ></input>
                <h6 className="mt-1 m-2">
                  He leído y acepto los términos y condiciones del sitio web
                </h6>
                {leidoCondiciones === false && (
                  <Alert severity="error" className="m-3 mt-4">
                    Debes aceptar los términos y condiciones!
                  </Alert>
                )}
              </div>
            </div>
            <button className="createOrder m-4">FINALIZAR COMPRA</button>
            <div className="d-flex justify-content-start divButton mt-1">
           

              <button
                className="d-flex align-items-center  back-button buttonGoBack my-4"
                type="submit"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <img className="arrow-icon mx-2" src={backArrow} alt="back arrow icon" /> VOLVER AL
                CARRITO
              </button>
            </div>
            {errorMessage && (
              <>
                <p className="m-2 fst-italic">
                  Error en crear orden, repase su información. Puede que ya no haya stock de alguno
                  de los productos elegidos
                </p>
                <div>
                  {missingProducts && (
                    <h4 className="m-2 fw-bold">INFORMACION DE PRODUCTOS EN FALTA DE STOCK</h4>
                  )}
                  {missingProducts &&
                    missingProducts.map((product) => {
                      return (
                        <div key={product._id}>
                          <ColoredLine color="gray" />
                          <div className="d-flex mt-4 mb-4 productosFaltantes">
                            <div>
                              {" "}
                              <img
                                className="sizeImageOutOfStock"
                                src={product.picture}
                                alt="productPicture"
                              ></img>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              {" "}
                              <h6 className="m-2">NOMBRE: {product.name}</h6>
                              <h6 className="m-2">
                                CANTIDAD DE STOCK RESTANTE: {product.stockLeft}
                              </h6>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    )
  );
}

export default Billing;
