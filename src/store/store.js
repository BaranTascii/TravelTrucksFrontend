import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./fleetSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
