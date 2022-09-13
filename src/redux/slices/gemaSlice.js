import { createSlice, current } from "@reduxjs/toolkit";

const gemaSlice = createSlice({
  name: "gema",
  initialState: {
    user: {},
    cart: [],
    cantProductsCart: 0,
    totalPrice: 0,
    userData: {},
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
            slug: action.payload.slug,
          });
        }
      } else {
        state.cart.push({
          productId: action.payload.id,
          cant: action.payload.cant,
          slug: action.payload.slug,
        });
      }
    },
    //quantity
    updateCantProducts(state, action) {
      state.cantProductsCart += action.payload;
    },
    updateTotalPrice(state, action) {
      state.totalPrice += action.payload;
    },
    deleteProductFromCart(state, action) {
      const newCart = state.cart.filter((product) => {
        return product.productId !== action.payload;
      });
      state.cart = newCart;
    },
    updateUser(state, action) {
      state.cart[action.payload.position].cant += action.payload.cant;
    },
    deleteCart(state, action) {
      state.cart = [];
      state.cantProductsCart = 0;
      state.totalPrice = 0;
    },

    storeUserData(state, action) {
      state.userData = action.payload;
    },

    deleteUserData(state, action) {
      state.userData = {};
    },
  },
});

const { actions, reducer } = gemaSlice;
export const {
  addProductToCart,
  updateCantProducts,
  deleteProductFromCart,
  updateUser,
  deleteCart,
  updateTotalPrice,
  storeUserData,
  deleteUserData,
} = actions;

export default reducer;
