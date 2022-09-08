import { createSlice, current } from "@reduxjs/toolkit";

const gemaSlice = createSlice({
  name: "gema",
  initialState: {
    user: {},
    cart: [],
  },
  reducers: {
    addProductToCart(state, action) {
      state.cart.push(action.payload);
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
  deleteProductFromCart,
  updateUser,
  deleteCart,
} = actions;

export default reducer;
