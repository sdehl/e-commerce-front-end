import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "./svg/arrow-left-solid.svg";
import "./styles/CartStyles.css";

function Cart() {
  const gema = useSelector((state) => state.gema);
  const token = useSelector((state) => state.gema.token);
  const navigate = useNavigate();

  //Status
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);

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
  };

  useEffect(() => {
    handle.updateCart();
    setTotal(gema.totalPrice);
  }, []);

  useEffect(() => {
    setTotal(gema.totalPrice);
  }, [gema.totalPrice]);

  return (
    cart && (
      <div>
        {cart.length > 0 ? (
          <div className="productList d-flex flex-column">
            <section className="listCart">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-center">
                  <p className="m-4">PRODUCT</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  {" "}
                  <p className="m-4">PRECIO</p>
                  <div className="d-flex m-4 ">CANTIDAD</div>
                  <p className="m-4 ">SUBTOTAL</p>
                </div>
              </div>
              <ColoredLine color="gray" />
            </section>
            {cart.map((property, index) => {
              return (
                <div key={property.product._id} className="listCart">
                  <section className="mt-4 mb-4">
                    <CartProduct product={property.product} cant={property.cant} position={index} />
                  </section>
                  <ColoredLine color="gray" />
                </div>
              );
            })}
            <div className="listCart">
              <h3 className="ml-4 mt-5 mb-0 titleTotalCart ">TOTAL DEL CARRITO</h3>
              <ColoredLine color="gray" />
              <div className="row m-4">
                <div className="col-2">
                  {" "}
                  <h5>ENVIO</h5> {" "}
                </div>
                <div className="col-8">
                  <input
                    type="radio"
                    name="adress"
                    value="userAdress"
                    className="mb-4 form-check-input"
                  ></input>
                    <label htmlFor="userAdress">Pick-up - Carrasco Sur</label>
                  <br></br>
                  <input
                    type="radio"
                    name="adress"
                    value="userAdress"
                    className="mb-4 form-check-input"
                  ></input>
                    <label htmlFor="userAdress">Envios a Maldonado por DePunta</label>
                  <br></br>
                  <input
                    type="radio"
                    name="adress"
                    value="userAdress"
                    className="mb-4 form-check-input"
                  ></input>
                    <label htmlFor="userAdress">Envios al Interior por DAC</label>
                  <br></br>
                </div>
              </div>
              <ColoredLine color="gray" />
              <div className="row m-4">
                <div className="col-2">
                  {" "}
                  <h5 className="font-weight-bold">TOTAL</h5>
                </div>
                <div className="col-8">
                  {" "}
                  <h5>{`U$S: ${total}`}</h5>
                </div>
              </div>
              <ColoredLine color="gray" />
              <div className="d-flex justify-content-start divButton mt-4">
                <Link to={gema.cart.length !== 0 ? "/billing" : "/cart"}>
                  <button className="endOrderBtn">IR A FINALIZAR LA COMPRA</button>
                </Link>
              </div>
              <div className="d-flex justify-content-start divButton mt-4">
                <button
                  className="d-flex align-items-center  back-button buttonGoBack my-4"
                  type="submit"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <img className="arrow-icon mx-2" src={backArrow} alt="back arrow icon" /> VOLVER A
                  LA TIENDA
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h5 className="m-5"> TU CARRITO ESTA VACÍO </h5>
            <div className="d-flex justify-content-start divButton mt-2 mb-5">
              <Link to="/">
                <button className="m-2 endOrderBtn">VOLVER A LA TIENDA</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default Cart;
