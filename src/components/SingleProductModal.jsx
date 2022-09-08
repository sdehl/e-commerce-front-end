import { useState } from "react";
import Product from "./Products";
import Button from "react-bootstrap";

function singleproductmodal(props) {
  const [prodId, setProdId] = (useState = true);
  const dispatch = useDispatch();

  return (
    <div className="row mb-5">
      <div className="col-4">
        <img
          src={
            "https://www.gemainteriores.com/wp-content/uploads/2021/05/Portada-2-scaled.jpg"
          }
          className="d-inline-block w-100"
          alt=""
        />
      </div>
      <div className="col-8">
        <div className="d-flex flex-column">
          <div>
            <img
              src={
                "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
              }
              className="d-block w-100"
              alt=""
            />
          </div>
          <div>
            <strong>
              <h2>
                -PRE VENTA- DESAGÜE DE PISO ESCONDIDO CUADRADO 100X100MM BRONCE
              </h2>
            </strong>
            <h4>U$S 97</h4>
            <div class="input-group w-auto justify-content-end align-items-center">
              <Button
                onClick={() => (variant = "light")}
                className="text-muted"
              >
                COMPRAR{" "}
              </Button>
              <input
                type="text"
                id="quantity_6319f06b0aa64"
                class="qodef-quantity-input input-text qty text"
                data-step="1"
                data-min="1"
                data-max=""
                name="quantity"
                value="1"
                title="Qty"
                size="4"
                placeholder=""
                inputmode="numeric"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singleproductmodal;
