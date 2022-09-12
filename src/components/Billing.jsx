import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./styles/BillingStyles.css";
import { useEffect, useState } from "react";

function Billing({ userLogged }) {
  const gema = useSelector((state) => state.gema);
  const location = useLocation();
  const { cart } = location.state;
  const [order, setOrder] = useState();
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
                    const order = order;
                    order.name = e.target.value;

                    setOrder(order);
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
              <input className="inputListCheckout"></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Dirección de la calle *</label>
              <input
                required
                className="inputListCheckout"
                placeholder="NUMERO DE LA CASA Y NOMBRE DE LA CALLE"
              ></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label> Localidad / Ciudad *</label>
              <input className="inputListCheckout" required></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Código postal *</label>
              <input className="inputListCheckout" required></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Teléfono *</label>
              <input className="inputListCheckout" required></input>
            </div>
            <div className="listInfo d-flex flex-column">
              <label>Correo electrónico *</label>
              <input className="inputListCheckout"></input>
            </div>
          </div>
          <div className="col-6">
            <div className=" d-flex flex-column listProducts">
              <label>Notas del pedido (opcional)</label>
              <input className="extraInfoInput"></input>
            </div>
          </div>
          <h3 className="mt-4 mb-3">TU PEDIDO</h3>
          <div className="">
            <div className="d-flex">
              {" "}
              <h5>PRODUCTO</h5>
              <h5>SUBTOTAL</h5>
            </div>
            {cart.map((property, index) => {
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
        </div>
      </div>
    )
  );
}

export default Billing;
