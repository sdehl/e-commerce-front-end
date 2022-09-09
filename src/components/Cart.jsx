import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";
import "../components/styles/CartStyles.css";
import { useNavigate } from "react-router";

function Cart() {
  const gema = useSelector((state) => state.gema);
  const dispatch = useDispatch();
  const [cart, setCart] = useState(null);
  const Navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [updatesCart, setUpdatedCart] = useState(null);

  //PREGUNTAR POR ORGANIZACION
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
    apiCall: async (product) => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products/cart`,
        params: { product },
      });
      return response.data;
    },
    updateCart: async () => {
      const obj = [];
      let total = 0;
      for (const prod of gema.cart) {
        let productObject = await handle.apiCall(prod.productId);
        obj.push({ product: productObject, cant: prod.cant });
        total += productObject.price * prod.cant;
      }
      setCart(obj);
      setTotal(total);
    },
  };

  useEffect(() => {
    handle.updateCart();
  }, []);

  return (
    cart && (
      <div>
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
          {cart.map((property) => {
            return (
              <div className="listCart">
                <section key={property.product._id} className="mt-4 mb-4">
                  <CartProduct
                    product={property.product}
                    cant={property.cant}
                  />
                </section>
                <ColoredLine color="gray" />
              </div>
            );
          })}
          <div className="d-flex justify-content-end divButton mt-4">
            <button
              className="updateButton listCart"
              onClick={() => {
                Navigate("/");
              }}
            >
              ACTUALIZAR
            </button>
          </div>
          <div className="listCart">
            <h3 className="ml-4 titleTotalCart ">TOTAL DEL CARRITO</h3>
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
                  className="mb-4"
                ></input>
                  <label for="userAdress">Pick-up - Carrasco Sur</label>
                <br></br>
                <input
                  type="radio"
                  name="adress"
                  value="userAdress"
                  className="mb-4"
                ></input>
                 {" "}
                <label for="userAdress">Envios a Maldonado por DePunta - Costo del Cliente</label>
                <br></br>
                <input
                  type="radio"
                  name="adress"
                  value="userAdress"
                  className="mb-4"
                ></input>
                 {" "}
                <label for="userAdress">Envios al Interior por DAC - Costo del Cliente</label>
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
              <button
                className="updateButton listCart"
                onClick={() => {
                  Navigate("/");
                }}
              >
                IR A FINALIZAR LA COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Cart;
