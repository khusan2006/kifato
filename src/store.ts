import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import searchReducer from "./slices/SearchSlices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  },
});

export default store;
