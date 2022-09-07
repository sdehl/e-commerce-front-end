import { createSlice, current } from "@reduxjs/toolkit";

const gemaSlice = createSlice({
  name: "gema",
  initialState: {
    user: {},
    cart: [],
  },
  reducers: {
    createCart(state, action) {},
    updateUser(state, action) {},
    deleteCart(state, action) {},
  },
});

const { actions, reducer } = gemaSlice;
export const { createCart, updateUser, deleteCart } = actions;

export default reducer;
