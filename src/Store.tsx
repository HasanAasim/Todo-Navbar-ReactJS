import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/Index";

const Store = configureStore({
  reducer: {
    todoReducer, // Assuming your reducer is named "todoReducer"
  },
});

export default Store;
