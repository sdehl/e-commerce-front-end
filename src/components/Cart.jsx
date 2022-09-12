import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import CartProduct from "./CartProduct";
import "../components/styles/CartStyles.css";
import { useNavigate } from "react-router";
import { updateTotalPrice } from "../redux/slices/gemaSlice";
import { Link } from "react-router-dom";

function Cart() {
  const gema = useSelector((state) => state.gema);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  const token = useSelector((state) => state.gema.token);

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
          obj.push({ product: productObject, cant: prod.cant });
          tot += productObject.price * prod.cant;
        }
      }
      setCart(obj);
    },
  };

  useEffect(() => {
    // dispatch(updateTotalPrice(-gema.totalPrice));
    handle.updateCart();
    setTotal(gema.totalPrice);
  }, []);

  useEffect(() => {
    setTotal(gema.totalPrice);
  }, [gema.totalPrice]);

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
          {cart.map((property, index) => {
            return (
              <div className="listCart">
                <section key={property.product._id} className="mt-4 mb-4">
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
                <input type="radio" name="adress" value="userAdress" className="mb-4"></input> {" "}
                <label for="userAdress">Pick-up - Carrasco Sur</label>
                <br></br>
                <input type="radio" name="adress" value="userAdress" className="mb-4"></input> {" "}
                <label for="userAdress">Envios a Maldonado por DePunta</label>
                <br></br>
                <input type="radio" name="adress" value="userAdress" className="mb-4"></input> {" "}
                <label for="userAdress">Envios al Interior por DAC</label>
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
              <Link to="/billing" state={{ cart: cart }}>
                <button
                  className="updateButton listCart"
                  onClick={() => {
                    navigate("/billing");
                  }}
                >
                  IR A FINALIZAR LA COMPRA
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Cart;
