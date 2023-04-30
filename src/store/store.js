import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../feature/productSelect";

export default configureStore({
  reducer: {
    counter : countReducer
  }
})