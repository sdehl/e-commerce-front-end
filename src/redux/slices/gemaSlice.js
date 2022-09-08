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
      if (state.cart > 0) {
        const found = state.cart.some((prod) => prod.id === action.payload.id);
        console.log("isFound", found);
        if (found) {
        }
      } else {
        state.cart.push({
          productId: action.payload.id,
          cant: action.payload.cant,
        });
      }
    },
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
