import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice.js";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Store;
