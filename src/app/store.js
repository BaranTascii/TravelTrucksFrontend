import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../features/campers/campersSlice";
import reservationsReducer from "../features/reservations/reservationsSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    reservations: reservationsReducer,
  },
});
