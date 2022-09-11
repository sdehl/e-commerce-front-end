import { createSlice, current } from "@reduxjs/toolkit";

const gemaSlice = createSlice({
  name: "gema",
  initialState: {
    user: {},
    cart: [],
    cantProductsCart: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      if (state.cart.length > 0) {
        let position = 0;
        const found = state.cart.some((product, index) => {
          if (product.productId === action.payload.id) {
            position = index;
            return true;
          }
        });
        if (found) {
          state.cart[position].cant += action.payload.cant;
        } else {
          state.cart.push({
            productId: action.payload.id,
            cant: action.payload.cant,
          });
        }
      } else {
        state.cart.push({
          productId: action.payload.id,
          cant: action.payload.cant,
        });
      }
    },
    //quantity
    updateCantProducts(state, action) {
      state.cantProductsCart += action.payload;
    },
    deleteProductFromCart(state, action) {
      const newCart = state.cart.filter((element) => {
        return element !== action.payload;
      });
      state.cart = newCart;
    },
    updateUser(state, action) {},
    deleteCart(state, action) {},
  },
});

const { actions, reducer } = gemaSlice;
export const {
  addProductToCart,
  updateCantProducts,
  deleteProductFromCart,
  updateUser,
  deleteCart,
} = actions;

export default reducer;
