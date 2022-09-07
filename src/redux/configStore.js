import { configureStore } from "@reduxjs/toolkit";
import gemReducer from "./slices/gemaSlice";

export const store = configureStore({
  reducer: { gema: gemReducer },
});