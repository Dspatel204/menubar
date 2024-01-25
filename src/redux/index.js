import { configureStore } from "@reduxjs/toolkit";
import mobileslice from "./slice/mobileSlice";

const Store = configureStore({
  reducer: {
    mobile: mobileslice,
  },
});

export default Store;
