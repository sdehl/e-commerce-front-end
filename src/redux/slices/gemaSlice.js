import { createSlice, current } from "@reduxjs/toolkit";

const gemaSlice = createSlice({
  name: "gema",
  initialState: {
    cart: [],
    cantProductsCart: 0,
    categories: ["Grifería", "Tiradores", "Herrajes"],
    totalPrice: 0,
    userData: {},
  },
  reducers: {
    // PRODUCT - CART  ------------------------------
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
    editCategories(state, action) {
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i] === action.payload.categoryName) {
          state.categories[i] = action.payload.newCategoryName;
        }
      }
    },
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
    deleteCart(state, action) {
      state.cart = [];
      state.cantProductsCart = 0;
      state.totalPrice = 0;
    },
    //USERS ---------------------------------------------------
    updateUser(state, action) {
      state.cart[action.payload.position].cant += action.payload.cant;
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
  editCategories,
} = actions;

export default reducer;
