import {
  addProductToCart,
  updateCantProducts,
} from "../redux/slices/gemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router";
import axios from "axios";

function Cart() {
  const gema = useSelector((state) => state.gema);
  const dispatch = useDispatch();
  const object = [];

  const handle = {
    apiCall: async (product, cant) => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products/cart`,
        params: { product, cant },
      });
      if (response.data) {
        gema.cart.push(response.data);
        console.log("object", object);
      }
    },
    updateCart: () => {
      for (const prod of gema.cart) {
        handle.apiCall(prod.product, prod.cant);
      }
    },
  };

  useEffect(() => {
    handle.updateCart();
    if (gema.cart) {
      console.log("Cart", gema.cart);
    }
  }, []);

  return (
   gema.cart && (
      <div>
        <div className="productList">
          {gema.cart.map((property) => {
            return (
              <div className="row">
                <p>{property.product.name}</p>
                <p>{property.cant}</p>
                <button
                  onClick={() => {
                    dispatch(
                      addProductToCart({ id: property.product._id, cant: 1 })
                    );
                    dispatch(updateCantProducts(1));
                  }}
                >
                  ADD
                </button>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default Cart;
